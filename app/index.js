// IMPORTANT: This needs to be first (before any other components)
// to get around CSS order randomness in webpack.
import './css/base.sass';

// require("babel/polyfill");

import React from 'react';
import Application from './components/Application';

React.render(<Application />, document.getElementById('app'));
