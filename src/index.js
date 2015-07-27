require('babel/polyfill');

import './css/base.sass';
import 'todomvc-app-css/index.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import { reduxRouteComponent } from 'redux-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import { store } from './redux';
import Home from './pages/home.react';
import Wrapper from './pages/wrapper.react';


class App extends Component {
  render() {
    return (
      <div>
        <ReduxProvider store={store}>
          {() => {
            return (
              <Router history={history}>
                <Route component={reduxRouteComponent(store)}>
                  <Route component={Wrapper}>
                    <Route path="/" component={Home} />
                  </Route>
                </Route>
              </Router>
            );
          }}
        </ReduxProvider>
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
