import { createRedux } from 'redux';
// import * as stores from './stores';

const reduxInstance = createRedux({
  debug(state, action) {
    console.log(action, state);
    return state;
  }
});
const dispatcher = reduxInstance.getDispatcher();

export default reduxInstance;
export const { dispatch } = { dispatcher };
