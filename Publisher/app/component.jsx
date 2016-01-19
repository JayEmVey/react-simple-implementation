import React from 'react';
import './component.css';

export default class Hello extends React.Component {
  render() {
    return (
    	<div className="component-wrapper">
    		<h1>Hello world!</h1>

	    	<div className="component-logo1">
	    		Logo 1
	    	</div>

	    	<div className="component-logo2">
	    		logo2
	    	</div>

    	</div>
    	);
  }
}