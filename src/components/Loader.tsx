import React from 'react';
import { keyframes } from '@emotion/core';

const spin = keyframes`
  100% {
    transform:rotate(360deg);
  }
`;

export const Loader = () => {
  return (
    <div
      css={{
        height: '52px',
        width: '50px',
        borderLeft: '4px solid black',
        borderBottom: '4px solid black',
        borderRight: '4px solid black',
        borderRadius: '50%',
        transformOrigin: 'center',
        animation: `${spin} 1s ease-in-out infinite`
      }}
    />
  );
};
