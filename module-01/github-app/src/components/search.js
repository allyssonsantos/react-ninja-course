'use strict';

import React from 'react';
import ajax from '@fdaciuk/ajax';

const Search = () => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário do GitHub'
      onKeyUp={(e) => {
        const value = e.target.value;
        const keyCode = e.wich || e.keyCode;
        const ENTER = 13;
        if (keyCode === ENTER) {
          ajax().get(`https://api.github.com/users/${value}`)
          .then((result) => {
            console.log(result);
          });
        }
      }}
    />
  </div>
);

export default Search;
