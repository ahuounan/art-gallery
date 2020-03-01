import React from 'react';
import { Link } from 'react-router-dom';

import { MenuItem } from './types';

interface Props {
  header: string;
  menuItems: MenuItem[];
}

export const Navbar = (props: Props) => {
  const { header, menuItems } = props;
  return (
    <header>
      <div>{header}</div>
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
