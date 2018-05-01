'use strict';

const counters = (state, action) => {
  switch(action.type) {
    case 'ADD_COUNTER':
      return state.concat(0);

    case 'REMOVE_COUNTER':
      return state.filter((_, index) => index !== action.index)
  }
};

export default counters;
