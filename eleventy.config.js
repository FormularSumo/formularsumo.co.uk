import { EleventyI18nPlugin } from "@11ty/eleventy";
import { DateTime } from "luxon";

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("stylesheets/*");
	eleventyConfig.addPassthroughCopy("assets/");
	eleventyConfig.addPassthroughCopy("favicon.ico");

	eleventyConfig.addPlugin(EleventyI18nPlugin,{
		defaultLanguage: "en",
	});

	eleventyConfig.addFilter("postDate", (dateObj, lang) => {
		if (lang == "en") {
			lang = "en-gb";
		}
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL, {locale: lang});
	});

	eleventyConfig.addFilter("localiseURL", (URL, lang) => {
		let newURL = "";
		if (lang == "es") {
			if (URL.includes("articles")) {
				URL = URL.split('/').slice(-2,-1)
				if (URL == "pronouns" ) {
					newURL = "pronombres";
				}

				if (newURL != "") {
					newURL = "/es/articulos/" + newURL;
				} else {
					newURL = "/es/blog/"; //If an article is not translated, redirect to blog page
				}
			} else { //This currently works because all pages have the same name, will need updating when new pages are added
				newURL = "/es" + URL
			}
		} else if (lang == "en" ) {
			if (URL.includes("articulos")) {
				URL = URL.split('/').slice(-2,-1)
				if (URL == "pronombres" ) {
					newURL = "pronouns";
				}

				if (newURL != "") {
					newURL = "/articles/" + newURL;
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