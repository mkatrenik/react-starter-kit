import React from 'react';
import { Route } from 'react-router';
import Application from './components/app';
import AsyncProps from 'react-router/lib/experimental/AsyncProps';


export default (
  <Route component={AsyncProps} renderInitialLoad={() => (<div>initializing ...</div>) }>
    <Route name="app" path="/" component={Application}>
      {/*<Route path="todos/create" component={TodoCreate} />
      <Route path="todos/:filter" component={TodoList} />
      <Redirect from="todos" to="todos/pending" />*/}
    </Route>
  </Route>
);
