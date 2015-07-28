/*eslint no-unused-expressions: 0*/
import * as actions from '../actions';
import * as actionsTypes from '../action-types';


describe('Actions', function () {
  it('`addTodo` should return correct type & payload', function () {
    const result = { type: actionsTypes.ADD_TODO, text: 'foo' };
    expect(actions.addTodo(result.text)).to.deep.equal(result);
  });

  it('`editTodo` should return correct type & payload', function () {
    const result = { type: actionsTypes.EDIT_TODO, id: 5, text: 'foo' };
    expect(actions.editTodo(result.id, result.text)).to.deep.equal(result);
  });

  it('`deleteTodo` should return correct type & payload', function () {
    const result = { type: actionsTypes.DELETE_TODO, id: 23 };
    expect(actions.deleteTodo(result.id)).to.deep.equal(result);
  });

  it('`markTodo` should return correct type & payload', function () {
    const result = { type: actionsTypes.MARK_TODO, id: 2 };
    expect(actions.markTodo(result.id)).to.deep.equal(result);
  });

  it('`markAll` should return correct type & payload', function () {
    const result = { type: actionsTypes.MARK_ALL };
    expect(actions.markAll()).to.deep.equal(result);
  });

  it('`clearMarked` should return correct type & payload', function () {
    const result = { type: actionsTypes.CLEAR_MARKED };
    expect(actions.clearMarked()).to.deep.equal(result);
  });
});
