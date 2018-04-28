

import { storiesOf } from '@kadira/storybook';
import React, { Component } from 'react';
import Title from './index';

const stories = storiesOf('Title', module);

stories.add('without props', () => (
  <Title>Main title</Title>
));

stories.add('Title with async/await', () => {
  class App extends Component {
    constructor() {
      super();
      this.state = {
        title: '...',
      };
    }


    async componentDidMount() {
      this.setState({
        title: await this.getTitle(),
      });
    }

    componentWillUnmount() {
      clearTimeout(this.timer);
    }

    getTitle() {
      return new Promise((resolve) => {
        this.timer = setTimeout(() => {
          resolve('My app with async / await!');
        }, 2000);
      });
    }

    render() {
      return (
        <div>
          <Title>{this.state.title}</Title>
        </div>
      );
    }
  }

  return <App />;
});
