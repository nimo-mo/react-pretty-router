var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Redirect = ReactRouter.Redirect;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var BrowserHistory = ReactRouter.browserHistory;
var WeUI = require('react-weui');
// window.$ = require('jquery');
// require('./js/lib/jquery.cookie');
window.$ = require('./js/lib/zepto');
require('./js/lib/zepto.cookie');

var Loading = require('./jsx/component/loading');
var NoMatch = require('./jsx/component/noMatch');
var Sign = require('./jsx/sign');
var Demo = require('./jsx/demo');
var RouterDemo = require('./jsx/routerDemo');
var WeuiDemo = require('./jsx/weuiDemo');

ReactDOM.render(<Loading />, document.getElementById('app-loading'));
ReactDOM.render((
  <Router history={BrowserHistory}>
    <Route path="/" components={RouterDemo}></Route>
    <Route path="/demo" components={Demo}></Route>
    <Route path="/sign/:type" components={Sign}></Route>
    <Route path="/routerDemo" components={RouterDemo}></Route>
    <Route path="/weuiDemo" components={WeuiDemo}></Route>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('app'));