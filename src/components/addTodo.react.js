import React, { Component, PropTypes } from 'react';


export default class AddTodo extends Component {

  static propTypes = {
    onSave: PropTypes.func.isRequired
  }


  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      console.log('onSave', text);
      this.props.onSave(text);
      e.target.value = '';
    }
  }


  render() {
    return (
      <div>
        <input className='new-todo'
         type='text'
         placeholder='What needs to be done?'
         autoFocus='true'
         onKeyDown={::this.handleSubmit} />
      </div>
    );
  }
}
