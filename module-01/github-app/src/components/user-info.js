'use strict';

import React from 'react';

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars1.githubusercontent.com/u/13424727?v=4' />
    <h1 className='username'>
      <a href='https://github.com/allyssonsantos/'>Allysson dos Santos</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: 12</li>
      <li>Seguidores: 2</li>
      <li>Seguindo: 4</li>
    </ul>
  </div>
);

export default UserInfo;
