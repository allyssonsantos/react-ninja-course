'use strict';

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Repos from './index';

const stories = storiesOf('Repos', module);

stories.add('with title prop', () => (
  <Repos title='Favoritos' />
));

stories.add('with repos', () => (
  <div style={{padding: '10px'}}>
    <Repos
      title='Favoritos'
      repos={[{
        link: 'https://allysson.me',
        name: 'Blog do Allysson'
      }]}
    />
  </div>
));
