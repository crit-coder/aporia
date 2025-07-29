// docusaurus-plugin-raw-loader.js
module.exports = () => ({
	name: 'custom-docusaurus-plugin-raw-loader',
	configureWebpack() {
		return {
			module: {
				rules: [
					{
						test: /\.ts$/,
						use: 'raw-loader',
					},
				],
			},
		}
	},
})
