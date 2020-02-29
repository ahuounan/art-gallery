import React from 'react';

import './styles.css';

interface IProps {
  text: string;
}

export const Subtext = React.memo((props: IProps) => {
  const { text } = props;
  return <p className="text-subtext">{text}</p>
});
