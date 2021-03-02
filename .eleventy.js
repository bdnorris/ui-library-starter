module.exports = function (eleventyConfig) {
	eleventyConfig.setTemplateFormats([
		'njk'
	])
	return {
		dir: {
			input: "views",
			output: "dist",
		},
	}
}