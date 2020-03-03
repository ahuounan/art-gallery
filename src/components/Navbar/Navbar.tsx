import React from 'react';
import { Link } from 'react-router-dom';

import { MenuItem } from './types';
import { Text } from 'components/Text';

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
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50px',
        padding: '0 5px 0 5px'
      }}
    >
      <Link
        css={{
          textDecoration: 'none',
          color: 'black'
        }}
        key={header.url}
        to={header.url}
      >
        <Text.Header text={header.label} />
      </Link>
      <div>
        {menuItems.map(({ label, url }) => {
          return (
            <div key={url} css={{ display: 'inline-block', marginLeft: '16px' }}>
              <Link
                css={{
                  textDecoration: 'none',
                  color: 'black'
                }}
                to={url}
              >
                <Text.Paragraph text={label} />
              </Link>
            </div>
          );
        })}
      </div>
    </header>
  );
};
