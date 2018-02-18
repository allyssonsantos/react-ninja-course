'use strict';

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Search from './index';

const stories = storiesOf('Search', module);

stories.add('with isDisabled prop equals false', () => (
  <Search
    isDisabled={false}
    handleSearch={action('Get Repos')}
  />
));

stories.add('with isDisabled prop equals true', () => (
  <Search
    isDisabled
    handleSearch={action('Get Repos')}
  />
));
