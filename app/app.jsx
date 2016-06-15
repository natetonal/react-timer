var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main.jsx');
var Timer = require('./components/Timer.jsx');
var Countdown = require('./components/Countdown.jsx');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <IndexRoute component={Timer} />
        <Route path="/countdown" component={Countdown} />
    </Route>
  </Router>,
  document.getElementById('app')
);
