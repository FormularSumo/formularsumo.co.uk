import { EleventyI18nPlugin } from "@11ty/eleventy";
import { DateTime } from "luxon";
import tocPlugin from "eleventy-plugin-toc";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import htmlTransform from './transforms/htmlTransform.js';

const mdOptions = {
	html: true,
	breaks: true,
  }
const mdAnchorOpts = {
	permalink: markdownItAnchor.permalink.linkInsideHeader({
		symbol: '#',
		class: 'anchor-link',
	}),
	level: [1, 2, 3, 4]
}

function translateURL(URL, lang) {
	let newURL = "/";

	if (lang == "es") {
		newURL += "es/";

		if (URL.includes("/blog/")) {
			newURL += "blog/";

			if (URL.split('/').slice(-2,-1) != "blog") {

				let year = URL.split('/').slice(-3,-2);
				let post = URL.split('/').slice(-2,-1);

				var translatedPost;

				if (post == "pronouns" ) {
					translatedPost = "pronombres";
				}
				else if (post == "microsoft-office-is-still-bad" ) {
					translatedPost = "microsoft-office-sigue-siendo-malo";
				}
				else if (post == "the-different-ways-of-reading" ) {
					translatedPost = "las-distintas-formas-de-leer";
				}

				if (translatedPost) {
					newURL += year + "/" + translatedPost + "/";
				}
				//If an article is not translated, goes to blog page
			}

		} else if (URL.includes("/living-pages/")) {
			newURL += "paginas-vivas/";

			if (URL.split('/').slice(-2,-1) != "living-pages") {

				let page = URL.split('/').slice(-2,-1);

				var translatedPage;
				// Work out translated page names here

				if (translatedPage) {
					newURL += translatedPage;
				}
				//If a living-page is not translated, goes to living pages page.
			}

		} else if (URL.includes("/about-this-site/")) {
			newURL += "sobre-esta-web/";

		} else { //Assumes that other top-level pages have the same name (eg homepage)
			newURL = "/es" + URL;
		}

	} else if (lang == "en" ) {

		if (URL.includes("/blog/")) {
			newURL += "blog/";

			if (URL.split('/').slice(-2,-1) != "blog") {

				let year = URL.split('/').slice(-3,-2);
				let post = URL.split('/').slice(-2,-1);

				var translatedPost;

				if (post == "pronombres" ) {
					translatedPost = "pronouns";
				}
				else if (post == "microsoft-office-sigue-siendo-malo" ) {
					translatedPost = "microsoft-office-is-still-bad";
				}
				else if (post == "las-distintas-formas-de-leer" ) {
					translatedPost = "the-different-ways-of-reading";
				}

				if (translatedPost) {
					newURL += year + "/" + translatedPost + "/";
				}
			}

		} else if (URL.includes("/paginas-vivas/")) {
			// Disabled as there are currently no EN living pages
			// newURL += "living-pages/";

			if (URL.split('/').slice(-2,-1) != "paginas-vivas") {

				let page = URL.split('/').slice(-2,-1);

				var translatedPage;

				if (translatedPage) {
					newURL += "living-pages/" + "/" + translatedPage;
				}
			}
		} else if (URL.includes("/sobre-esta-web/")) {
			newURL += "about-this-site/";

		} else {
			newURL += URL.split('/').slice(2,3);
		}
	}

	return newURL;
};

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("stylesheets/");
	eleventyConfig.addPassthroughCopy("_redirects");
	eleventyConfig.addPassthroughCopy("favicon.ico");
	eleventyConfig.addPassthroughCopy("manifest.json");
	eleventyConfig.addPassthroughCopy("es/manifest.json");

	eleventyConfig.addTemplateFormats([ //Using glob passthroughs doesn't work. When building for the second time, it creates a _site folder under _site, which breaks file location references
		"xml",
		"svg",
		"webp",
		"jxl",
		"avif",
		"jpg",
		"opus",
		// "png"
	]);

	// Transforms
	eleventyConfig.addTransform('html', htmlTransform({
		anchors: { setTitle: false },
	}));

	eleventyConfig.setLibrary(
		'md',
		markdownIt(mdOptions).use(markdownItAnchor)
	  )

	eleventyConfig.addPlugin(EleventyI18nPlugin,{
		defaultLanguage: "en",
	});

	eleventyConfig.addPlugin(tocPlugin, {
		tags: ['h2', 'h3', 'h4'],
		ul: true,
	});

	eleventyConfig.addFilter("postDate", (dateObj, lang) => {
		if (lang == "en") {
			lang = "en-gb";
		}
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL, {locale: lang});
	});

	eleventyConfig.addFilter("feedTime", (dateObj) => {
		return dateObj.toISOString();
	});

	// Takes a default English language URL and converts it to the specified language
	eleventyConfig.addFilter("localiseURL", (URL, lang) => {
		if (lang == "en" ) {
			return URL;
		} else {
			return translateURL(URL, lang);
		}
	});

	//Converts the current URL to the specified language
	eleventyConfig.addFilter("translateURL", (URL, lang) => {
		return translateURL(URL, lang);
	});

	eleventyConfig.addFilter("get_introduction", (content) => {
		return content.split('%contents%')[0]
	});

	eleventyConfig.addFilter("get_content", (content) => {
		return content.split('%contents%')[1]
	});
};