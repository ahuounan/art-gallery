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
    <header>
      <Link key={header.url} to={header.url}>
        {header.label}
      </Link>
      {menuItems.map(({ label, url }) => {
        return (
          <Link key={url} to={url}>
            {label}
          </Link>
        );
      })}
    </header>
  );
};
