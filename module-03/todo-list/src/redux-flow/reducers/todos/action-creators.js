import { v4 } from 'uuid';
import { ADD_TODO, TOGGLE_TODO } from './actions';

export const addTodo = text => ({
  type: ADD_TODO,
  payload: { id: v4(), text },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id },
});
