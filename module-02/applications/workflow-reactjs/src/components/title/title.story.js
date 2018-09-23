'use strict';

import { storiesOf } from '@kadira/storybook';
import React, { Component } from 'react';
import Title from './index';

const stories = storiesOf('Title', module);

stories.add('without props', () => (
  <Title>Main title</Title>
));

stories.add('Title with async/await', () => {
  class App extends Component {
    constructor () {
      super();
      this.state = {
        title: '...'
      };
    }

    getTitle () {
      return new Promise((resolve, reject) => {
        this.timer = setTimeout(() => {
          resolve('My app with async / await!');
        }, 2000);
      });
    }

    async componentDidMount () {
      this.setState({
        title: await this.getTitle()
      });
    }

    componentWillUnmount () {
      clearTimeout(this.timer);
    }

    render () {
      return (
        <div>
          <Title>{this.state.title}</Title>
        </div>
      );
    }
  }

  return <App />;
});
