'use strict';

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import UserInfo from './index';

const stories = storiesOf('UserInfo', module);

stories.add('Userinfo Component', () => (
  <UserInfo
    userinfo={{
      username: 'Allysson',
      photo: 'https://avatars3.githubusercontent.com/u/13424727?s=460&v=4',
      login: 'allyssonsantos',
      repos: 10,
      followers: 10,
      following: 10
    }}
  />
));
