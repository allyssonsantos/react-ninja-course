'use strict';

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Counter from './index';

const stories = storiesOf('Counter', module);

stories.add('Counter', () => (
  <Counter />
));
