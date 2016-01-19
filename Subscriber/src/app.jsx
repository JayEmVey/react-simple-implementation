var React = require('react');
var ReactDOM = require('react-dom');

var Input = require('./components/input');

var Hello = React.createClass({
	render: function() {
		return (
			<div>
				Hello World
			</div>
    	)
  	}
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
