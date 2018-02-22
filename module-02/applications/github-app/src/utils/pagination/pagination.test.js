'use strict';

import { expect } from 'chai';
import pagination from './index';

it('pagination should be a function', () => {
  expect(pagination).to.be.a('function');
});

it('pagination({ total: 1, activePage: 1 }) should return [1]', () => {
  const params = { total: 1, activePage: 1 };
  const result = [1];
  expect(pagination(params)).to.be.deep.equal(result);
});

it('pagination({ total: 2, activePage: 1 }) should return [1, 2]', () => {
  const params = { total: 2, activePage: 1 };
  const result = [1, 2];
  expect(pagination(params)).to.be.deep.equal(result);
});

it('pagination({total: 5, activePage: 1}) should return [1, 2, 3, 4, 5]', () => {
  const params = { total: 5, activePage: 1 };
  const result = [1, 2, 3, 4, 5];
  expect(pagination(params)).to.be.deep.equal(result);
});

it('pagination({ total: 6, activePage: 1 }) should return [1, 2, 3, "...", 6]', () => {
  const params = { total: 6, activePage: 1};
  const result = [1, 2, 3, '...', 6];
  expect(pagination(params)).to.be.deep.equal(result);
});
