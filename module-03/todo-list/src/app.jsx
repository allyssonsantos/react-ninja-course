import React from 'react';

const App = () => (
  <div>
    <input type="text" />

    <ul>
      <li style={{ textDecoration: 'line-through' }}>Item 1</li>
      <li>Item 1</li>
      <li>Item 1</li>
      <li>Item 1</li>
      <li>Item 1</li>
    </ul>

    <div>
      <h3>Mostrar</h3>
      <span href="">Todos</span> | <a href="">Finalizados</a> | <a href="">A fazer</a>
    </div>
  </div>
);

export default App;
