import React from 'react';
import { Navbar } from './Navbar/Navbar';

interface Props {
  children?: React.ReactNode;
}

export const Screen = (props: Props) => {
  const { children } = props;
  return (
    <div
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Navbar
        header={{ label: 'Jenny Dong', url: '/' }}
        menuItems={[
          { label: 'collections', url: '/collections' },
          { label: 'years', url: '/years' },
          { label: 'about', url: '/about' },
          { label: 'contact', url: '/contact' }
        ]}
      />
      <div css={{ flex: 1, position: 'relative' }}>{children}</div>
    </div>
  );
};
