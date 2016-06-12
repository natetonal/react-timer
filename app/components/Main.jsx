var React = require('react');
var Nav = require('./Nav.jsx');

var Main = (props) => {
    return (
        <div>
        <Nav />
        <h1>Main.jsx</h1><br />
        {props.children}
        </div>
    );
}

module.exports = Main;
