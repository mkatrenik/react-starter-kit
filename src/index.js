require('babel/polyfill');

import './assets/styles/bootstrap.sass';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import { reduxRouteComponent } from 'redux-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import { store } from './redux';
import { Layout } from './pages';


class App extends Component {
  render() {
    return (
      <div>
        <ReduxProvider store={store}>
          {() => {
            return (
              <Router history={history}>
                <Route component={reduxRouteComponent(store)}>
                  <Route path="/" component={Layout} />
                </Route>
              </Router>
            );
          }}
        </ReduxProvider>
        {/*<DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor} />
        </DebugPanel>*/}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
