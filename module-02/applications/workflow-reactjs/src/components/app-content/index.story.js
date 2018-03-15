import React from 'react';
import { storiesOf } from '@kadira/storybook';
import App from './index';

storiesOf('App', module)
  .add('My App', () => (
    <App />
  ));
