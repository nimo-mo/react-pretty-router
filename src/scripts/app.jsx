var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Redirect = ReactRouter.Redirect;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var BrowserHistory = ReactRouter.browserHistory;
var $ = window.$ = require('./js/lib/zepto');
    require('./js/lib/zepto.cookie');

var NoMatch = require('./jsx/component/noMatch');
var Sign = require('./jsx/sign');

ReactDOM.render((
  <Router history={BrowserHistory}>
    <Route path="/" components={Sign}></Route>
    <Route path="/sign/:type" components={Sign}></Route>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('app'));