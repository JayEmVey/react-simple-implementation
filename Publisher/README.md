# Publisher web app
Web app works as a publisher application to deivery consent message to Subscriber web app

## React ecosystem

- ReactJS: 
- Redux (not implement): 
- Webpack: webpack is a module bundler takes modules with dependencies and generates static assets representing those modules. Find the `webpack.config.js` file in this root folder for configuration
- Babel: Babel is a JavaScript compiler using to compiple JSX file to JS (raw javascript). Find the `.babelrc` file in this root folder for configuration
- webpack-dev-server: When webpack-dev-server is running it will watch your files for changes. We added a script that refreshes the application when a change occurs
- CSS loader: Loading CSS requires the css-loader and the style-loader.
	- The css-loader will go through the CSS file and find url() expressions and resolve them.
	- The style-loader will insert the raw css into a style tag on your page.
- Url loader: The limit is an argument passed to the url-loader. It tells it that images that are 25KB or smaller in size will be converted to a BASE64 string and included in the CSS file where it is defined.

## Installation

Browse to root folder of the project, using `npm` command as below:

> npm install

## Run

Using `npm` command:

> npm run dev

Try http://localhost:8080 on your web browser