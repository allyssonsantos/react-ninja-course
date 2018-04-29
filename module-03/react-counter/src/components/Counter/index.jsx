'use strict';

import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ counter, increment, decrement }) => (
  <React.Fragment>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </React.Fragment>
);

const mapStateToProps = state => ({
  counter: state,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
