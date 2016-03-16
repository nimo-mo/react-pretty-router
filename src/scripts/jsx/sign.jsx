var React = require('react');

var SignUp = React.createClass({

	render: function() {
		return (
			<div>SignUp</div>
		);
	}

});

var SignIn = React.createClass({

	render: function() {
		return (
			<div>SignIn</div>
		);
	}

});

var Sign = React.createClass({

	contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function() {
  	// this.context.router.push('up');
  },

  componentDidUpdate: function(prevProps, prevState) {
  	
  },

  componentWillReceiveProps: function(nextProps) {
  	
  },

	render: function() {
		console.log(this.context.router)
		console.log(this.props.routeParams)
		return (
			<div>
				<SignIn />
				<SignUp />
			</div>
		);
	}

});

module.exports = Sign;