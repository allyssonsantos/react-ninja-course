'use strict';

import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import counters from './index';

it('counters should be a function', () => {
  expect(counters).to.be.a('function');
});

it('should add a counter', () => {
  const before = deepFreeze([]);
  const action = deepFreeze({ type: 'ADD_COUNTER' });
  const after = [0];
  expect(counters(before, action)).to.be.eql(after);
});

it('should add a new counter', () => {
  const before = deepFreeze([0, 1]);
  const action = deepFreeze({ type: 'ADD_COUNTER' });
  const after = [0, 1, 0];

  expect(counters(before, action)).to.be.eql(after);
})
