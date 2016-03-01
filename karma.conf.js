// Karma configuration
// Generated on Thu Feb 18 2016 13:14:59 GMT-0500 (Eastern Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        "resources/scripts/libs/angular.min.js",
        "resources/scripts/libs/angular-mocks.js",
        "resources/scripts/libs/angular-route.min.js",
        "resources/scripts/libs/angular-aria.min.js",
        "resources/scripts/libs/angular-animate.min.js",
        "resources/scripts/libs/angular-messages.min.js",
        "resources/scripts/libs/angular-material.min.js",
        "resources/scripts/app.js",
        "resources/scripts/main.js",
        "resources/scripts/controllers/*.js",
        "resources/scripts/directives/*.js",
        "resources/scripts/factory/*.js",
        "test/step1Test.js",
        "test/step2Test.js",
        "test/step3Test.js",
        "test/step4Test.js",


        // Needed for module/inject in unit tests
        'views/**/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
