'use strict';

import React, { Component } from 'react';
import AppContent from './components/app-content';

class App extends Component {
  constructor () {
    super();
    this.state = {
      userinfo: {
        username: 'Allysson dos Santos',
        photo: 'https://avatars1.githubusercontent.com/u/13424727?v=4',
        login: 'allyssonsantos',
        repos: 12,
        followers: 11,
        following: 10
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]
    };
  }
  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />;
  }
}

export default App;
