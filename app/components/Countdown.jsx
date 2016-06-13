var React = require('react');
var Clock = require('./Clock.jsx');

var Countdown = React.createClass({
    render: function(){
        return(
            <div>
                <Clock totalSeconds={129} />
            </div>
        );
    }
});

module.exports = Countdown;
