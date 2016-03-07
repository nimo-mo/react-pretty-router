var React = require('react');
var Api = require('../js/api');

var Demo = React.createClass({

	getInitialState: function() {
		return {
			x:123 
		};
	},

	componentDidMount: function() {
		Api.get(null,null,{
			// ajaxSettings first
			url:'../statics/demo.json',
			complete: function () {
				setTimeout(Loading.done,2000)
			}
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