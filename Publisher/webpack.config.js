var path = require('path');

var config = {
    //entry: path.resolve(__dirname, 'app/main.js'),
    //When webpack-dev-server is running it will watch your files for changes.
    //We added a script that refreshes the application when a change occurs
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/main.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
	module: {
		loaders: [
		  {
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
			presets: ['react']
			}
		  }
		]
	}
};

module.exports = config;