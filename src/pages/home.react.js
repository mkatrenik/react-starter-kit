import React, { Component } from 'react';
// import { Link } from 'react-router';

import {
  AddTodoComponent as AddTodo,
  TodoItemComponent as TodoItem,
  FooterComponent as Footer,
  actions as todoActions,
  constants as todoConstants
} from '../modules/todos';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const { SHOW_ALL, SHOW_MARKED, SHOW_UNMARKED } = todoConstants;

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_UNMARKED]: todo => !todo.marked,
  [SHOW_MARKED]: todo => todo.marked
};


// TODO decorator which filters out routers props
@connect(state => {
  return { state };
})
export default class Home extends Component {

  render() {
    const { dispatch, state } = this.props;
    const filter = (state.router.query && state.router.query.filter) || SHOW_ALL;
    const actions = bindActionCreators(todoActions, dispatch);
    const filteredTodos = state.todos.filter(TODO_FILTERS[filter]);
    const markedCount = filteredTodos.reduce((count, todo) =>
      todo.marked ? count + 1 : count,
      0
    );
    const unmarkedCount = filteredTodos.length - markedCount;

    return (
      <div className='todoapp'>
        <header className='header'>
            <h1>todos</h1>
            <AddTodo onSave={actions.addTodo}/>
        </header>
        <section className='main'>
          {filteredTodos.length > 0 &&
            <input className='toggle-all'
                     type='checkbox'
                     checked={markedCount === filteredTodos.length}
                     onChange={actions.markAll} />
          }
          <ul className='todo-list'>
            {filteredTodos.map(todo =>
              <TodoItem key={todo.id} todo={todo} {...actions} />
            )}
          </ul>
        </section>
        <Footer markedCount={markedCount}
                unmarkedCount={unmarkedCount}
                filter={filter}
                onClearMarked={actions.clearMarked}
                />
      </div>
    );
  }
}
