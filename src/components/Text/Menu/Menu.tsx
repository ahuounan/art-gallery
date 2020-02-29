import React from 'react';

import './styles.css';

interface IProps {
  text: string;
  isActive?: boolean;
}

export const Menu = React.memo((props: IProps) => {
  const { text, isActive = false } = props;
  return <h4 className={`text-menu ${isActive ? 'text-menu--active' : ''}`}>{text}</h4>
});
