import { EleventyI18nPlugin } from "@11ty/eleventy";
import { DateTime } from "luxon";

function translateURL(URL, lang) {
	let newURL = "";
	if (lang == "es") {
		if (URL.includes("blog/2")) {
			console.log(URL)
			let Year = URL.split('/').slice(-3,-2)
			URL = URL.split('/').slice(-2,-1)
			if (URL == "pronouns" ) {
				newURL = "pronombres";
			}

			if (newURL != "") {
				newURL = "/es/blog/" + Year + "/" + newURL;
			} else {
				newURL = "/es/blog/"; //If an article is not translated, redirect to blog page
			}
		} else { //This currently works because all pages have the same name, will need updating when new pages are added
			newURL = "/es" + URL
		}
	} else if (lang == "en" ) {
		if (URL.includes("es/blog/2")) {
			let Year = URL.split('/').slice(-3,-2)
			URL = URL.split('/').slice(-2,-1)
			if (URL == "pronombres" ) {
				newURL = "pronouns";
			}

			if (newURL != "") {
				newURL = "/blog/" + Year + "/" + newURL;
			} else {
				newURL = "/blog/";
			}
		} else {
			newURL = "/" + URL.split('/').slice(2,-1)
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
		// "png"
	]);

	eleventyConfig.addPlugin(EleventyI18nPlugin,{
		defaultLanguage: "en",
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

	// Takes a default English language URL and converts it the specified language
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
};