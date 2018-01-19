'use strict';

import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super();
    this.state = {
      value: '2'
    };
  }

  render () {
    return (
      <div>
        <form>
          <textarea value='textarea value'/>
        </form>
      </div>
    );
  }
}

export default App;
