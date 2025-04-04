import { EleventyI18nPlugin } from "@11ty/eleventy";
import { DateTime } from "luxon";

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

	eleventyConfig.addFilter("localiseURL", (URL, lang) => {
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
		} else { //This is used so default-language English pages ("/") can be passed through without change
			newURL = URL
		}
		return newURL;
	});
};