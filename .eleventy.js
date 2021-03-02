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
	return {
		dir: {
			input: "views",
			includes: "views/_includes",
			output: "dist",
		},
	}
}