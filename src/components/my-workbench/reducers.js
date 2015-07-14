
export function logs(state = [], action) {
  switch (action.type) {
  case 'LOG':
    return state.concat(action.message);
  }
  return state;
}
