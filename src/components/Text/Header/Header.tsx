import React from 'react';

import './styles.css';

interface IProps {
  text: string;
}

export const Header = React.memo((props: IProps) => {
  const { text } = props;
  return <h3 className="text-header">{text}</h3>
});
