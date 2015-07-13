require('babel/polyfill');

import 'react-flexr/styles.css';
import './css/base.sass';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux/react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import AsyncProps from 'react-router/lib/experimental/AsyncProps';

import routes from './routes';
import redux from './redux';

const history = new BrowserHistory();


const base = (
  <Provider redux={redux}>
    {() => {
      return (<Router history={history} createElement={AsyncProps.createElement} routes={routes} />);
    }}
  </Provider>
);

ReactDOM.render(base, document.getElementById('app'));
