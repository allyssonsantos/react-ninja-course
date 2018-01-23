'use strict';

import React, { Component } from 'react';
import AppContent from './components/app-content';
import ajax from '@fdaciuk/ajax';

class App extends Component {
  constructor () {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    };
  }

  handleSearch (e) {
    const value = e.target.value;
    const keyCode = e.wich || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
      .then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          }
        });


        /*
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
        */
      });
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
    />;
  }
}

export default App;
