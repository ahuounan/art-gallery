import React from 'react';

import './styles.css';

interface IProps {
  text: string;
}

export const Paragraph = React.memo((props: IProps) => {
  const { text } = props;
  return <p className="text-paragraph">{text}</p>
});
