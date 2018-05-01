'use strict';

import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import counters, {
  ADD_COUNTER,
  REMOVE_COUNTER,
  INCREMENT,
  DECREMENT
} from './index';

it('counters should be a function', () => {
  expect(counters).to.be.a('function');
});

it('should add a counter', () => {
  const before = deepFreeze([]);
  const action = deepFreeze({ type: ADD_COUNTER });
  const after = [0];
  expect(counters(before, action)).to.be.eql(after);
});

it('should add a new counter', () => {
  const before = deepFreeze([0, 1]);
  const action = deepFreeze({ type: ADD_COUNTER });
  const after = [0, 1, 0];

  expect(counters(before, action)).to.be.eql(after);
});

it('should reemove a counter', () => {
  const before = deepFreeze([0, 1, 2]);
  const action = deepFreeze({ type: REMOVE_COUNTER, index: 1 });
  const after = [0, 2];

  expect(counters(before, action)).to.be.eql(after);
});

it('should remove a counter again', () => {
  const before = deepFreeze([1, 1]);
  const action = deepFreeze({ type: REMOVE_COUNTER, index: 0 });
  const after = [1];

  expect(counters(before, action)).to.be.eql(after);
});

it('should increment a counter', () => {
  const before = deepFreeze([0, 0]);
  const action = deepFreeze({ type: INCREMENT, index: 0 });
  const after = [1, 0];

  expect(counters(before, action)).to.be.eql(after);
});

it('should increment another counter', () => {
  const before = deepFreeze([1, 0]);
  const action = deepFreeze({ type: INCREMENT, index: 1 });
  const after = [1, 1];

  expect(counters(before, action)).to.be.eql(after);
});

it('should decrement a counter', () => {
  const before = deepFreeze([0, 2, 1]);
  const action = deepFreeze({ type: DECREMENT, index: 2 });
  const after = [0, 2, 0];

  expect(counters(before, action)).to.be.eql(after);
});

it('should decrement another counter', () => {
  const before = deepFreeze([0, 2, 0]);
  const action = deepFreeze({ type: DECREMENT, index: 1 });
  const after = [0, 1, 0];

  expect(counters(before, action)).to.be.eql(after);
});

it('should return same state if action is unkown', () => {
  const before = deepFreeze([0, 0, 1]);
  const action = deepFreeze({ type: 'UNKOWN' });
  const after = [0, 0, 1];

  expect(counters(before, action)).to.be.eql(after);
});

it('should return initial state if last state is undefined', () => {
  const before = undefined;
  const action = deepFreeze({});
  const after = [];

  expect(counters(before, action)).to.be.eql(after);
});
