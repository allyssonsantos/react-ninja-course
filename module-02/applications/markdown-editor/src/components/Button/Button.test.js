'use strict';

import React from 'react';
import Button from './index';
import renderer from 'react-test-renderer';

it('Should Button default match snapshot', () => {
  const tree = renderer.create(<Button onClick={() => null}>Hello Button</Button>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Should Button success match snapshot', () => {
  const tree = renderer.create(<Button onClick={() => null} kind="success">Hello Button</Button>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Should Button danger match snapshot', () => {
  const tree = renderer.create(<Button onClick={() => null} kind="danger">Hello Button</Button>).toJSON();

  expect(tree).toMatchSnapshot();
});
