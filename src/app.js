'use strict';

import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super();
    this.state = {
      value: 'Valor inicial'
    };
  }
  render () {
    return (
      <div>
        <form>
          <input type='text' value={this.state.value} onChange={(e) => {
            this.setState({
              value: e.target.value
            });
          }} />
          <input type='text' defaultValue='Valor defualtValue' />
        </form>
      </div>
    );
  }
}

export default App;
