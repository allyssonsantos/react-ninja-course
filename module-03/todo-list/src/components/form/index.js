import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'reducers/todos/action-creators';

const Form = ({ handleAddTodo }) => (
  <form onSubmit={handleAddTodo}>
    <input type="text" name="todo" />
    <button type="submit">Adicionar</button>
  </form>
);

const mapDispatchToProps = dispatch => ({
  handleAddTodo: e => {
    e.preventDefault();

    const { value } = e.target.todo;
    dispatch(addTodo(value));
    e.target.todo.value = '';
    e.target.todo.focus();
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Form);
