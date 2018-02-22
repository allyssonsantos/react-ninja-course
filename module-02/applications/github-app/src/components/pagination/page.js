'use strict';

import React from 'react';

const Page = ({ page, pageLink }) => {
  const Component = page === '...' ? 'span' : 'a';
  const href = page === '...' ? null : pageLink;

  return (
    <Component href={href}>
      {page}
    </Component>
  );
};

export default Page;
