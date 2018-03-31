'use strict';

import React, { Component } from 'react';
import marked from 'marked';

import MarkdownEditor from 'components/Markdown-editor';

import 'src/css/style.css';

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value;
      }
      hljs.highlightAuto(code).value;
    }
  });
});

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

    this.handleSave = () => {
      localStorage.setItem('md', this.state.value);
    };

    this.getMarkup = () => ({
      __html: marked(this.state.value)
    });
  }

  componentDidMount () {
    const value = localStorage.getItem('md');
    this.setState({ value });
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        handleSave={this.handleSave}
        getMarkup={this.getMarkup}
      />
    );
  }
}

export default App;
