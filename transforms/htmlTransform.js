import { readFileSync } from 'node:fs';

import { imageSize } from 'image-size'
import { JSDOM, VirtualConsole } from 'jsdom';

import { assign, forEach } from 'rgjs7/obj';

const REGEX_IS_SVG = /\.svg$/;

const JSDOM_ERRORS_IGNORES = [
  'css parsing',
];

const cache = new Map();

const virtualConsole = new VirtualConsole();
virtualConsole.sendTo( console, { omitJSDOMErrors: true } );
virtualConsole.on( 'jsdomError', error => {
  if ( JSDOM_ERRORS_IGNORES.includes( error.type ) ) return false;
  console.error( error );
});

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
    
    // Images
    const images = [ ...docElem.querySelectorAll('img') ];
    images.forEach( element => {

      let src = element.getAttribute('src');

      // Don't add width and height for SVG images, these should always be manually set
      if (REGEX_IS_SVG.test( src )) 
        return content;
      
      // Assume that if an image doesn't start with a "/" then it's using a relative path from the current directory
      if (!src.startsWith("/")) {
        const pathArray = outputPath.split('/');
        var newSrc = '/';
        for (let i=2; i<pathArray.length-1; i++) {
            newSrc += pathArray[i] + '/'
        }
        src = newSrc + src
      }
      const path = '.' + src;

      // Set width / height attrs
      if ( options.images?.setWidthHeight && path) {

        try {
          const buffer = _readFile( path );
          const { width, height } = imageSize( buffer );
          options.debug && console.log(` -> Image - Set width/height: ${ src}, ${ width } x ${ height }`);
          _setAttrs( element, { width, height } );
        }
        catch ( error ) {
          console.warn(` -> WARN: Image - Could not set width/height`)
          console.warn(` -> File: ${ outputPath }`);
          console.warn(` -> Image: ${ path }`);
          throw error;
        }

      }

    });

    return jsdom.serialize();

  };
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