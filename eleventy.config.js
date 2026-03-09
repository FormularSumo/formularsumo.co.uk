import { EleventyI18nPlugin } from "@11ty/eleventy";
import tocPlugin from "eleventy-plugin-toc";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import htmlTransform from './transforms/htmlTransform.js';
import details from './shortcodes/details.js';

const mdOptions = {
	html: true,
	breaks: true,
  }
const mdAnchorOpts = {
	// permalink: markdownItAnchor.permalink.linkAfterHeader({
	// 	class: 'anchor-link',
	// 	style: 'visually-hidden',
	// 	symbol: '#',
	// }),
	level: [1, 2, 3, 4]
}

function translateURL(URL, lang) {
	let newURL = "/";
	let splitURL = URL.split('/')

	if (lang == "es") {
		newURL += "es/";

		if (URL.includes("/blog/")) {
			newURL += "blog/";

			if (splitURL.at(-2) != "blog") {

				let year = splitURL.at(-3);
				let post = splitURL.at(-2);

				let translatedPost;

				if (post == "pronouns" ) {
					translatedPost = "pronombres";
				}
				else if (post == "microsoft-office-is-still-bad" ) {
					translatedPost = "microsoft-office-sigue-siendo-malo";
				}

				if (translatedPost) {
					newURL += year + "/" + translatedPost + "/";
				}
				//If an article is not translated, goes to blog page
			}

		} else if (URL.includes("/living-pages/")) {
			newURL += "paginas-vivas/";

			// Disabled as there's currently no translated living pages
			// if (splitURL.at(-2) != "living-pages") {

			// 	let page = splitURL.at(-2);

			// 	let translatedPage;
			// 	// Work out translated page names here

			// 	if (translatedPage) {
			// 		newURL += translatedPage;
			// 	}
			// 	//If a living-page is not translated, goes to living pages page.
			// }

		// } else if (URL.includes("/about-this-site/")) {
		// 	newURL += "sobre-esta-web/";

		} else { //Assumes that other top-level pages have the same name (eg homepage)
			newURL = "/es" + URL;
		}

	} else if (lang == "en" ) {

		if (URL.includes("/blog/")) {
			newURL += "blog/";

			if (splitURL.at(-2) != "blog") {

				let year = splitURL.at(-3);
				let post = splitURL.at(-2);

				let translatedPost;

				if (post == "pronombres" ) {
					translatedPost = "pronouns";
				}
				else if (post == "microsoft-office-sigue-siendo-malo" ) {
					translatedPost = "microsoft-office-is-still-bad";
				}

				if (translatedPost) {
					newURL += year + "/" + translatedPost + "/";
				}
			}

		} else if (URL.includes("/paginas-vivas/")) {
			newURL += "living-pages/";

			// Disabled as there's currently no translated living pages
			// if (splitURL.at(-2) != "paginas-vivas") {

			// 	let page = splitURL.at(-2);

			// 	let translatedPage;

			// 	if (translatedPage) {
			// 		newURL += translatedPage;
			// 	}
			// }
		} else if (URL.includes("/sobre-esta-web/")) {
			newURL += "about-this-site/";

		} else {
			newURL += splitURL.at(2);
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
		markdownIt(mdOptions).use(markdownItAnchor, mdAnchorOpts)
	  )

	// Shortcodes
	eleventyConfig.addPairedShortcode('details', details);

	// Plugins
	eleventyConfig.addPlugin(EleventyI18nPlugin,{
		defaultLanguage: "en",
	});

	eleventyConfig.addPlugin(tocPlugin, {
		tags: ['h2', 'h3', 'h4'],
		ul: true,
	});

	eleventyConfig.addFilter("postDate", (date, lang) => {
		if (lang == "en") {
			lang = "en-GB";
		}

		const dateObj = new Date(date)
		return dateObj.toLocaleString(lang, {dateStyle: "long"});
	});

	eleventyConfig.addFilter("ISOTime", (dateObj) => {
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