import { createRedux } from 'redux';
import * as workBenchActions from './components/my-workbench/reducers';
console.log(workBenchActions);

const reduxInstance = window.redux = createRedux({
  debug(state, action) {
    console.log(action, state);
  },
  ...workBenchActions
});
const dispatcher = reduxInstance.getDispatcher();

export default reduxInstance;
export const { dispatch } = { dispatcher };
