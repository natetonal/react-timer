var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
    render: function(){
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li>
                            <Link to="/" activeStyle={{ fontWeight: 'bold' }} onlyActiveOnIndex={true}>Timer</Link>
                        </li>
                        <li>
                            <Link to="/:tag" activeStyle={{ fontWeight: 'bold' }} onlyActiveOnIndex={true}>Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu align-right">
                        <li className="menu-text">Created by <Link to="/">Nate Kimball</Link>.</li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
