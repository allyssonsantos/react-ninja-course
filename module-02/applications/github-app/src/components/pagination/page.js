'use strict';

import React from 'react';

const Page = ({ page, pageLink, onClick }) => {
  const Component = page === '...' ? 'span' : 'a';
  const href = page === '...' ? null : pageLink;
  const handleClick = !onClick ? null : (e) => {
    e.preventDefault();
    onClick(page);
  };

  return (
    <Component href={href} onClick={handleClick}>
      {page}
    </Component>
  );
};

export default Page;
