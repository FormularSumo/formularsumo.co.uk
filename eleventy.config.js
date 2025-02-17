import { EleventyI18nPlugin } from "@11ty/eleventy";
import { DateTime } from "luxon";

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("stylesheets/");
	eleventyConfig.addPassthroughCopy("assets/");
	eleventyConfig.addPassthroughCopy("_redirects");
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
				let Year = URL.split('/').slice(-3,-2)
				URL = URL.split('/').slice(-2,-1)
				if (URL == "pronouns" ) {
					newURL = "pronombres";
				}

				if (newURL != "") {
					newURL = "/es/articulos/" + Year + "/" + newURL;
				} else {
					newURL = "/es/blog/"; //If an article is not translated, redirect to blog page
				}
			} else { //This currently works because all pages have the same name, will need updating when new pages are added
				newURL = "/es" + URL
			}
		} else if (lang == "en" ) {
			if (URL.includes("articulos")) {
				let Year = URL.split('/').slice(-3,-2)
				URL = URL.split('/').slice(-2,-1)
				if (URL == "pronombres" ) {
					newURL = "pronouns";
				}

				if (newURL != "") {
					newURL = "/articles/" + Year + "/" + newURL;
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