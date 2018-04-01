'use strict';

import React, { PropTypes } from 'react';
import Header from './Header';

const MarkdownEditor = ({
  value,
  isSaving,
  handleChange,
  handleRemove,
  getMarkup
}) => (
  <section className='editor'>
    <Header
      isSaving={isSaving}
      handleRemove={handleRemove}
    />

    <textarea
      value={value}
      onChange={handleChange}
      autoFocus
    />
    <article
      className='view'
      dangerouslySetInnerHTML={getMarkup()}
    />
  </section>
);

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
};

export default MarkdownEditor;
