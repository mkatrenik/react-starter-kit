# React starter kit

Customized version of https://github.com/bradleyboy/yarsk

## Features

* [React](http://facebook.github.io/react/), of course.
* [React Router](https://github.com/rackt/react-router) router.
* [Redux](https://github.com/gaeron/redux) flux pattern implementation.
* [Webpack](http://webpack.github.io/) for asset bundling.
* [Babel](https://babeljs.io/) for ES6+ transpilation.
* [Flow](https://flowtype.org/) Optional static typing for javascript.
* Image loaders setup and ready to go so you can reference your images as `require()` statements in JS, or just use `url()` as usual in CSS and Webpack will take care of the rest. See the [Header](https://github.com/bradleyboy/yarsk/blob/master/app/components/Header/index.jsx#L9-L18) component and the [Application component stylesheet](https://github.com/bradleyboy/yarsk/blob/master/app/components/Application/style.sass#L2) for examples of each.

* [Karma](http://karma-runner.github.io/0.12/index.html) + [Mocha](http://mochajs.org/) for testing. [Istanbul](https://gotwarlost.github.io/istanbul/) and [isparta](https://github.com/douglasduteil/isparta) are also activated with `karma-coverage` for code coverage analysis, even on your ES6 classes. See [Testing](https://github.com/bradleyboy/yarsk#tests) below for more info.
* Production configuration with best practices applied for optimizing React file size. The bundled JS file produced from this example is right at 40KB minified and gzipped. See [Building](https://github.com/bradleyboy/yarsk#building) below for more info.


## Usage

Requires node v0.12.4 and higher
For managing node.js versions, I recommend [nvm](https://github.com/creationix/)

```
$ nvm install v0.12.7
```

Then upgrade npm to 3.x version
```
npm i -g npm@beta
```

Then clone this repo, then run:

```
npm install
npm start
```

That will fire up a webpack dev server in **hot** mode. Most changes will be reflected in the browser automatically without a browser reload. You can view the app in the browser at `http://localhost:8080`.

## Building

To generate a production build, run:

```
npm run build
```

The above command will generate a `dist` folder with the appropriate index.html file along with the minified CSS and JS files.

## Modifying the HTML

The HTML file is generated using the `conf/tmpl.html` file. This file is used for both the development and production build.

## Tests

The tests use Karma, Mocha and Chai through PhantomJS. See the example test in `src/app/__tests__/index.js`. The test suite can be run like so:

```
npm test
```

To run the tests in watch mode (tests will re-run each time a file changes), use this instead:

```
npm run test:watch
```

You can generate code coverage reports with:

```
npm run test:coverage
```

See the `coverage` directory once that command is completed.

## Linting

If you'd like your JavaScript to be linted, copy the `.eslintrc.example` to `.eslintrc`. I've included my own defaults, feel free to modify them to your own taste. For more information on configuring ESLint, [consult its documentation](http://eslint.org/docs/rules/). Linting is run before each webpack build when a `.eslintrc` file is present.

## .editorconfig

An example `.editorconfig` file is provided with sensible defaults for JavaScript. Feel free to modify `.editorconfig.example` to match your own preferences, then renamed the file to `.editorconfig` and use an IDE or editor that supports [EditorConfig](http://editorconfig.org/).
