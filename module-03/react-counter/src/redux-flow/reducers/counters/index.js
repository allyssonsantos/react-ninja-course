'use strict';

const counters = (state, action) => {
  switch(action.type) {
    case 'ADD_COUNTER':
      return state.concat(0);
  }
};

export default counters;
