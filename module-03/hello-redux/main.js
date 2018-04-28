'use strict';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state -1;
    default: return state;
  }
};

const { createStore } = Redux;
const store = createStore(counter);

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());
