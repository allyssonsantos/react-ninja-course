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
      isSaving: null,
      files: {}
    };

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      });
    };

    this.handleSave = () => {
      if (this.state.isSaving) {
        const newFile = {
          title: 'Sem titulo',
          content: this.state.value
        };

        localStorage.setItem(this.state.id, JSON.stringify(newFile));
        this.setState({
          isSaving: false,
          files: {
            ...this.state.files,
            [this.state.id]: newFile
          }
        });
      }
    };

    this.createNew = () => {
      this.setState(this.clearState());
      this.textarea.focus();
    };

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id);

      // eslint-disable-next-line no-unused-vars
      const { [this.state.id]: id, ...files } = this.state.files;

      this.setState({ files });
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

    this.handleOpenFile = (fileId) => () => {
      this.setState({
        value: this.state.files[fileId].content,
        id: fileId
      });
    };
  }

  componentDidMount () {
    const files = Object.keys(localStorage);
    this.setState({
      files: files.reduce((acc, fileId) => ({
        ...acc,
        [fileId]: JSON.parse(localStorage.getItem(fileId))
      }), {})
    });
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
        files={this.state.files}
        handleOpenFile={this.handleOpenFile}
      />
    );
  }
}

export default App;
