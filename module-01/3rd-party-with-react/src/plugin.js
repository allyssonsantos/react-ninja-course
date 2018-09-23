'use strict';

import React, { Component } from 'react';

class Plugin extends Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.myInput.focus();
    console.log('clicou', this.myInput);
  }

  render () {
    return (
      <div>
        <input type='text' ref={(node) => (this.myInput = node)} />
        <button onClick={this.handleClick}>Focus</button>
      </div>
    );
  }
}

export default Plugin;
