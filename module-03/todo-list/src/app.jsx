import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'reducers/todos/action-creators';

const App = ({ todos, handleAddTodo }) => (
  <div>
    <form onSubmit={handleAddTodo}>
      <input type="text" name="todo" />
      <button type="submit">Adicionar</button>
    </form>
    {console.log(todos)}
    <ul>
      <li style={{ textDecoration: 'line-through' }}>Item 1</li>
      <li>Item 1</li>
      <li>Item 1</li>
      <li>Item 1</li>
      <li>Item 1</li>
    </ul>

    <div>
      <h3>Mostrar</h3>
      <span href="">Todos</span> | <a href="">Finalizados</a> |{' '}
      <a href="">A fazer</a>
    </div>
  </div>
);

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch => ({
  handleAddTodo: e => {
    e.preventDefault();

    const { value } = e.target.todo;
    dispatch(addTodo(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
