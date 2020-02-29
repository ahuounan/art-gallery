import React from 'react';

import './styles.css';

interface IProps {
  text: string;
}

export const Title = React.memo((props: IProps) => {
  const { text } = props;
  return <h2 className="text-title">{text}</h2>
});
