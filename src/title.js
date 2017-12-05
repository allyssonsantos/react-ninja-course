'use strict';

import React from 'react';

const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Desconhecido',
      lastname: 'Sem sobrenome'
    };
  },
  render: function () {
    return (
      <h1>Ola {
        this.props.name + ' ' + this.props.lastname.first +
         this.props.lastname.last
      }!</h1>
    );
  }
});

export default Title;
