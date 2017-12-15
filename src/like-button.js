'use strict';

import React from 'react';
import Button from './button';

const LikeButton = () => (
  <Button handleClick={
    () => alert('likeButton')
  }>Curtir</Button>
);

export default LikeButton;
