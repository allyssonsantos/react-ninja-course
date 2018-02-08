'use strict';

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Actions from './index';

const stories = storiesOf('Actions', module);

stories.add('first story', () => (
  <Actions
    getRepos={action('Get Repos')}
    getStarred={action('Get Starred')}
  />
));
