'use strict';

import React, { Component } from 'react';
import AppContent from 'components/app-content';

class App extends Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
    return <AppContent
      {...this.state}
    />;
  }
}

export default App;
