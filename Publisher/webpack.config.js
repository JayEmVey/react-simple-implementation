var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var config = {
    //entry: path.resolve(__dirname, 'app/main.js'),
    //When webpack-dev-server is running it will watch your files for changes.
    //We added a script that refreshes the application when a change occurs
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
	plugins: [
	    new HtmlwebpackPlugin({
	      title: 'React simple implementation'
	    })
	],    
	module: {
		loaders: [
		  {
			test: /\.(js|jsx)?$/,
			exclude: /(node_modules|bower_components)/,
			//loader: 'babel',
			// Use the property "loaders" instead of "loader" and 
      		// add "react-hot" in front of your existing "jsx" loader
      		loaders: ['react-hot', 'babel']
		  },
		  //Loading CSS requires the css-loader and the style-loader.
		  //They have two different jobs.
		  //The css-loader will go through the CSS file and find url() expressions and resolve them.
		  //The style-loader will insert the raw css into a style tag on your page.
		  {
		  	test: /\.css?$/,
		  	loader: 'style!css',
		  },
		  //The limit is an argument passed to the url-loader.
		  //It tells it that images that are 25KB or smaller in size will be converted to a BASE64 string and included in the CSS file where it is defined.
		  {
		  	test: /\.(png|jpg)$/,
		  	loader: 'url?limit=25000',
		  },
		  {
			test: /\.woff$/,
			loader: 'url?limit=100000'
		  }
		]
	}
};

module.exports = config;