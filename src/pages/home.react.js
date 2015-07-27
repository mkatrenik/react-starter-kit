import React, { Component } from 'react';
// import { Link } from 'react-router';
import { AddTodo, TodoItem } from '../components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoActions';


// TODO decorator which filters routers props
@connect(state => {
  return { state };
})
export default class Home extends Component {
  render() {
    const { dispatch, state } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);
    const filteredTodos = state.todos;
    const markedCount = filteredTodos.reduce((count, todo) =>
      todo.marked ? count + 1 : count,
      0
    );
    console.log(this.props, TodoItem);
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
        {this.props.children}
      </div>
    );
  }
}
