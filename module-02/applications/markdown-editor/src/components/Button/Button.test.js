'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Button from './index';

configure({ adapter: new Adapter() });
const noop = () => null;

it('Should Button default match snapshot', () => {
  const tree = renderer.create(<Button onClick={noop}>Hello Button</Button>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Should Button success match snapshot', () => {
  const tree = renderer.create(<Button onClick={noop} kind="success">Hello Button</Button>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Should Button danger match snapshot', () => {
  const tree = renderer.create(<Button onClick={noop} kind="danger">Hello Button</Button>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Button with prop kind = "success" should has class "-success"', () => {
  const wrapper = shallow(<Button onClick={noop} kind="success">Success</Button>);
  expect(wrapper.hasClass('-success')).toBe(true);
});

it('Button with prop kind = "danger" should has class "-danger"', () => {
  const wrapper = shallow(<Button onClick={noop} kind="danger">Success</Button>);
  expect(wrapper.hasClass('-danger')).toBe(true);
});
