var webpackConfig = require('./webpack.config.js');

module.exports = function(options) {
  var karmaConfig = {
    frameworks: ['mocha', 'chai'],

    browsers: [
      'PhantomJS',
      // 'Chrome'
    ],

    files: [
      // This shim adds .bind to PhantomJS
      './tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack']
    },

    webpackMiddleware: {
        noInfo: true,
    },

    reporters: ['mocha'],

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter',
      'karma-chrome-launcher'
    ],
  };

  if (options.coverage) {
    // Needs to load first to prevent linting issues
    webpackConfig.module.preLoaders = [
      {
        test: /\.jsx?$/,
        exclude: /(__tests__|node_modules)/,
        loader: 'isparta-instrumenter-loader',
      },
    ].concat(webpackConfig.module.preLoaders);

    karmaConfig.plugins.push('karma-coverage');

    karmaConfig.coverageReporter = {
      dir: '../coverage',
      reporters: options.coverageReporters || [
        { type: 'text' },
        { type: 'html' },
      ],
    };

    karmaConfig.reporters.push('coverage');
  }

  if (options.notify) {
    karmaConfig.reporters.push('notify');
    karmaConfig.plugins.push('karma-notify-reporter');
  }

  webpackConfig.devtool = 'inline-source-map';
  karmaConfig.webpack = webpackConfig;

  return karmaConfig;
};
