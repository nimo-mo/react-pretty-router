var React = require('react');
var Api = require('../js/api');

var Demo = React.createClass({

	getInitialState: function() {
		return {
			x:123 
		};
	},

	componentDidMount: function() {
		Api.get('',{},{
			// ajaxSettings first
			url:'../statics/demo.json',
			complete: function () {}
		})
		.done(function (res) {
			console.log(res)
		})
		.fail(function (error) {
			// body...
		})
	},

	render: function() {
		return (
			<div style={{height:2000}} />
		);
	}

});

module.exports = Demo;