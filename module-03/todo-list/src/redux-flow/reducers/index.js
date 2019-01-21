// import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibility-filter';

const combineReducers = reducers => (state = {}, action) =>
  Object.keys(reducers).reduce(
    (nextState, key) => ({
      ...nextState,
      [key]: reducers[key](state[key], action),
    }),
    {}
  );

export default combineReducers({
  todos,
  visibilityFilter,
});
