import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export const Screen = (props: Props) => {
  const { children } = props;
  return (
    <div css={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'red'
    }}>
      {children}
    </div>
  )
}
