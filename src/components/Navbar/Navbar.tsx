import React from 'react';
import { Link } from 'react-router-dom';

import { MenuItem } from './types';

interface Props {
  header: MenuItem;
  menuItems: MenuItem[];
}

export const Navbar = (props: Props) => {
  const { header, menuItems } = props;
  return (
    <header
      css={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Link key={header.url} to={header.url}>
        {header.label}
      </Link>
      <div>
        {menuItems.map(({ label, url }) => {
          return (
            <div key={url} css={{ display: 'inline-block', marginLeft: '16px' }}>
              <Link to={url}>{label}</Link>
            </div>
          );
        })}
      </div>
    </header>
  );
};
