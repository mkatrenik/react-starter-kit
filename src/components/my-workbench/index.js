import React from 'react';
import { connect } from 'redux/react';
import * as actions from './actions';


@connect(state => {
  // console.log('state:', state);
  return { logs: state.logs };
})
export default class MyWorkbench extends React.Component {

  onInput = (e) => {
    if (e.keyCode === 13) {
      this.props.dispatch(actions.log(e.target.value));
      e.target.value = '';
    }
  }

  render() {
    // console.log(this.props.logs);
    return (
      <div>
        <h3>My Workbench</h3>
        <input placeholder="Type smtn" onKeyDown={this.onInput} />
        <div>
          {this.props.logs.map(log => <pre>{log}</pre>)}
        </div>
      </div>
    );
  }
}
