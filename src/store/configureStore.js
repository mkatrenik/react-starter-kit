import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-react-router';
import { devTools } from 'redux-devtools';
import createHistory from 'history/lib/createBrowserHistory';
import routes from '../routes';
import thunk from 'redux-thunk';
// import api from '../middleware/api';
import logger from 'redux-logger';
import rootReducer from '../reducers';

// debugger;
const finalCreateStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(logger({ collapsed: true })),
  devTools()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
