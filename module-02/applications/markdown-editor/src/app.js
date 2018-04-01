'use strict';

import React, { Component } from 'react';
import { v4 } from 'node-uuid';
import marked from 'marked';
import MarkdownEditor from 'views/Markdown-editor';

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

    this.clearState = () => ({
      value: '',
      id: v4()
    });

    this.state = {
      ...this.clearState(),
      isSaving: null
    };

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      });
    };

    this.handleSave = () => {
      if (this.state.isSaving) {
        localStorage.setItem(this.state.id, this.state.value);
        this.setState({ isSaving: false });
      }
    };

    this.createNew = () => {
      this.setState(this.clearState());
      this.textarea.focus();
    };

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id);
      this.createNew();
    };

    this.handleCreate = () => {
      this.createNew();
    };

    this.getMarkup = () => ({
      __html: marked(this.state.value)
    });

    this.textareaRef = (node) => {
      this.textarea = node;
    };
  }

  componentDidUpdate () {
    clearInterval(this.timer);
    this.timer = setTimeout(this.handleSave, 500);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        getMarkup={this.getMarkup}
        textareaRef={this.textareaRef}
      />
    );
  }
}

export default App;
