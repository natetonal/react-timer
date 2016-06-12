// This is a mandatory settings file for Karma.
// Globbing pattern - path that includes asteriks to allow wildcard searching

// for Tonal, DEFNITELY check docs on this!!

var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: ['app/tests/**/*.test.jsx'],
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};
