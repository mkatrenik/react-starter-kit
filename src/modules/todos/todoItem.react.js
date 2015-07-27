import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';


export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
  }

  render() {
    const {todo, markTodo, deleteTodo} = this.props;

    const element = (
      <div className='view'>
        <input className='toggle'
               type='checkbox'
               checked={todo.marked}
               onChange={() => markTodo(todo.id)} />
        <label>
          {todo.text}
        </label>
        <button className='destroy'
                onClick={() => deleteTodo(todo.id)} />
      </div>
    );

    return (
      <li className={classnames({
        completed: todo.marked
      })}>
        {element}
      </li>
    );
  }
}
