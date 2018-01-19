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
              defaultChecked />
            Checkbox
          </label>
          <input type='radio' name='rd' value='1' defaultChecked /> Radio 1
          <input type='radio' name='rd' value='2' /> Radio 2
        </form>
      </div>
    );
  }
}

export default App;
