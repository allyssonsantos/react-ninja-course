'use strict';

import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super();
    this.state = {
      value: 'Valor inicial',
      checked: false
    };
  }
  render () {
    return (
      <div>
        <form>
          <input type='text' value={this.state.value} onChange={(e) => {
            this.setState({ value: e.target.value });
          }} />
          <input type='text' defaultValue='Valor defualtValue' />

          <label>
            <input
              type='checkbox'
              value='my-checkbox'
              checked={this.state.checked}
              onChange={(e) => {
                this.setState({ checked: !this.state.checked });
              }} />
            Checkbox
          </label>
        </form>
      </div>
    );
  }
}

export default App;
