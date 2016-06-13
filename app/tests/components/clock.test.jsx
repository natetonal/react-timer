var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', ()=> {
        expect(Clock).toExist();
    });

    describe('render', ()=> {
        it('should render clock to output', () => {
            // TestUtils.renderIntoDocument allows component to be rendered and used for tests.
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            // ReactDOM.findDOMNode allows us to find a react component inside of the DOM. We use a jQuery wrapper to convert it to a jQuery selector.
            var $el = $(ReactDOM.findDOMNode(clock));
            // Now we can use jQuery methods on it.
            var actualText = $el.find('.clock-text').text();

            expect(actualText).toBe('01:02');
        });
    });

    describe('formatSeconds', () => {
        it('should format seconds', () => {
            // TestUtils allows component to be rendered and used for tests.
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 615;
            var expected = '10:15';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });

        it('should format seconds when min/sec are less than 10.', () => {
            // TestUtils allows component to be rendered and used for tests.
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 61;
            var expected = '01:01';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    });
});
