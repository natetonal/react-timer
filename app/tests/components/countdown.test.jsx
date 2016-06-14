var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    // In a case where you have an asynchronous test, pass "done" to "it" and call it within your async function.
    // Then, the test will perform correctly. Otherwise, it will report an error.
    describe('handleSetCountdown', () => {
        it('should set state to "started" and count down', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            // call the function on our rendered instance.
            countdown.handleSetCountdown(10);

            // Countdown status should've been updated & the count should've been updated.
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should not go below zero', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });
    });
});