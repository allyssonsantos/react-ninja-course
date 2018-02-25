'use strict';

import React from 'react';

const Page = ({ page, pageLink, onClick }) => {
  const Dots = () => <span>...</span>;
  const Component = page === '...' ? Dots : 'a';
  const handleClick = !onClick ? null : (e) => {
    e.preventDefault();
    onClick(page);
  };

  return (
    <Component href={pageLink} onClick={handleClick}>
      {page}
    </Component>
  );
};

export default Page;
