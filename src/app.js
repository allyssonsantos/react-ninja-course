'use strict';

import React, { Component } from 'react';
import Square from './square';

class App extends Component {
  render () {
    return (
      <div className='container' onClick={(e) => {
        alert('epa');
      }}>
        <Square />
      </div>
    );
  }
}

export default App;
