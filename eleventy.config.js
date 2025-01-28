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
	})
};