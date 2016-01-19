var React = require('react');

module.exports = React.createClass({

	render: function() {
		return (
			<input type={this.props.typeName} className={"form-control " + this.props.className} placeholder={this.props.placeholderString} />
		)
	}
});