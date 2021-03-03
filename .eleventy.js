const pluginSass = require("eleventy-plugin-sass");
const sassPluginOptions = {};

module.exports = function (eleventyConfig) {
	eleventyConfig.setTemplateFormats([
		'njk',
		'md',
		'html',
		'css',
		'jpeg',
		'jpg',
		'png',
		'svg',
		'woff',
		'woff2'
	]);
	eleventyConfig.addPassthroughCopy('static');
	eleventyConfig.addPlugin(pluginSass, sassPluginOptions);
	return {
		dir: {
			input: '_template',
			includes: '../_includes',
			output: '_output',
		},
	}
}