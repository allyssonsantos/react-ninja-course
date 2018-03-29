'use strict';

import React, { Component } from 'react';
import MarkdownEditor from './markdown-editor';

import 'normalize.css';
import 'src/css/style.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      value: ''
    };

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value
      });
    };

    this.getMarkup = () => ({
      __html: this.state.value
    });
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
      />
    );
  }
}

export default App;
