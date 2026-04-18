/* Thanks to Roderick Gadellaa for letting me use his implementation of this https://github.com/OpenWebAdvocacy/website/pull/247 */

import { readFileSync } from 'node:fs';

import { imageSize } from 'image-size'
import { JSDOM, VirtualConsole } from 'jsdom';

import { assign, forEach } from 'rgjs7/obj';

/* Ideally I'd just say which errors I want to ignore (CSS errors), but that doesn't seem to work in JSDom 27 */
const JSDOM_ERRORS = [
  "unhandled-exception", "resource-loading", "not-implemented"
]

const cache = new Map();

const virtualConsole = new VirtualConsole();
virtualConsole.forwardTo( console, { jsdomErrors: JSDOM_ERRORS } );

/**
 *
 */
function htmlTransform( _options={} ) {

  const options = assign(
    {
      debug: false,
      images: {
        setWidthHeight: true,
      },
    },
    _options
  );

  return function( content, outputPath ) {

    // Only .html
    if ( !outputPath.endsWith('.html') )
      return content;

    // Debug
    options.debug && console.log(`HTML Transform: ${ outputPath }`);

    // Prep DOM
    const jsdom = new JSDOM( content, { virtualConsole } );
    const document = jsdom.window.document;
    const docElem = document.documentElement;
    
    // Images and sources
    if ( options.images?.setWidthHeight ) {
      const images  = [ ...docElem.querySelectorAll('img') ];
      const sources = [ ...docElem.querySelectorAll('picture source') ];

      images.forEach( element => {
        const rawSrc = element.getAttribute('src');
        _setWidthHeight( element, rawSrc, outputPath, options.debug );
      });

      sources.forEach( element => {
        // srcset may contain multiple candidates ("img.avif 760w, img2.avif 1200w");
        // use the first URL only, as all candidates in a srcset share the same intrinsic dimensions
        const rawSrc = element.getAttribute('srcset')?.split(',')[0].trim().split(/\s+/)[0];
        if ( !rawSrc ) return;
        _setWidthHeight( element, rawSrc, outputPath, options.debug );
      });
    }

    return jsdom.serialize();

  };
}

/**
 * Resolves an image src to a filesystem path, reads its dimensions, and stamps
 * width/height attributes onto the element. Works for both <img> and <source>.
 * @private
 */
function _setWidthHeight( element, rawSrc, outputPath, debug=false ) {

  // Assume that if an image doesn't start with a "/" then it's using a relative path from the current directory
  let src = rawSrc;
  if ( !src.startsWith('/') ) {
    const pathArray = outputPath.split('/');
    let newSrc = '/';
    for (let i=2; i<pathArray.length-1; i++) {
      newSrc += pathArray[i] + '/';
    }
    src = newSrc + src;
  }
  const path = '.' + src;

  // Set width / height attrs
  try {
    const buffer = _readFile( path );
    const { width, height } = imageSize( buffer );
    debug && console.log(` -> ${ element.tagName } - Set width/height: ${ src }, ${ width } x ${ height }`);
    _setAttrs( element, { width, height } );
  }
  catch ( error ) {
    console.warn(` -> WARN: ${ element.tagName } - Could not set width/height`);
    console.warn(` -> File: ${ outputPath }`);
    console.warn(` -> Image: ${ path }`);
    throw error;
  }

}

/**
 * @private
 */
function _readFile( path ) {
  if ( cache.has( path ) ) return cache.get( path );
  const buffer = readFileSync( path );
  cache.set( path, buffer );
  return buffer;
}

/**
 * @private
 */
function _setAttrs( element, attrs ) {
  forEach( attrs, ( v, a ) => element.setAttribute( a, v ) );
}

export default htmlTransform;