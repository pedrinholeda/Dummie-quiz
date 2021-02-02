import React from 'react';
// eslint-disable-next-line import/no-unresolved
import NextLink from 'next/link';

// eslint-disable-next-line react/prop-types
export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}
