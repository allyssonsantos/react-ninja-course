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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('event', e);
          }}

          onChange={(e) => {
            console.log('name', e.target.name);
            console.log('value', e.target.value);
          }}
        >
          <textarea name='textArea' defaultValue='textarea value'/>
          <input type="name" name="name" />

          <input type='checkbox' onClick={(e) => {
            console.log(e);
          }} />

          <button type='submit'>Enviar</button>
        </form>
      </div>
    );
  }
}

export default App;
