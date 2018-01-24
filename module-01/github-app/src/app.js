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
            repos: [{
              name: 'Repo',
              link: '#'
            }],
            starred: [{
              name: 'Repo',
              link: '#'
            }]
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
      getRepos={() => console.log('get repos')}
      getStarred={() => console.log('get starred')}
    />;
  }
}

export default App;
