'use strict';

import React from 'react';

const Counter = ({ counter, increment, decrement }) => (
  <React.Fragment>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </React.Fragment>
);

export default Counter;
