var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Redirect = ReactRouter.Redirect;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var BrowserHistory = ReactRouter.browserHistory;
// window.$ = require('jquery');
// require('./js/lib/jquery.cookie');
window.$ = require('./js/lib/zepto');
require('./js/lib/zepto.cookie');

var Loading = require('./jsx/component/loading');
var NoMatch = require('./jsx/component/noMatch');
var Sign = require('./jsx/sign');
var Demo = require('./jsx/demo');

ReactDOM.render(<Loading />, document.getElementById('app-loading'));
ReactDOM.render((
  <Router history={BrowserHistory}>
    <Route path="/" components={Sign}></Route>
    <Route path="/demo" components={Demo}></Route>
    <Route path="/sign/:type" components={Sign}></Route>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('app'));