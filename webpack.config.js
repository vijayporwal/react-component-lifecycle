var webpackConfig = {
	entry: "./src/app.js",
	watch: true,
	output: {
		path: __dirname + "/build/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
		{
			test: [/\.js$/, /\.es6$/],
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			}
		}]
	},
	resolve: {
		extensions: ['', '.js', '.es6']
	}
}

module.exports = webpackConfig;