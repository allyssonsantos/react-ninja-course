import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from 'reducers/todos/action-creators';

const App = ({ todos, handleAddTodo, handleToggleTodo }) => (
  <div>
    <form onSubmit={handleAddTodo}>
      <input type="text" name="todo" />
      <button type="submit">Adicionar</button>
    </form>

    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={handleToggleTodo(todo.id)}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </li>
      ))}
    </ul>

    <div>
      <h3>Mostrar</h3>
      <span href="">Todos</span> | <a href="">Finalizados</a> |{' '}
      <a href="">A fazer</a>
    </div>
  </div>
);

const mapStateToProps = ({ todos }) => ({
  todos,
});

const mapDispatchToProps = dispatch => ({
  handleAddTodo: e => {
    e.preventDefault();

    const { value } = e.target.todo;
    dispatch(addTodo(value));
    e.target.todo.value = '';
    e.target.todo.focus();
  },

  handleToggleTodo: id => e => {
    dispatch(toggleTodo(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
