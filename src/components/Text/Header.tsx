import React from 'react';
import { styles } from 'styles';
import { CSSObj } from 'types';

interface Props {
  text: string;
}

const css: CSSObj = {
  margin: 0,
  padding: 0,
  fontSize: styles.fontSize3,
  lineHeight: styles.fontSize3,
  fontFamily: styles.fontSans,
  fontWeight: styles.fontWeight2
};

export const Header = (props: Props) => {
  const { text } = props;
  return <h3 css={css}>{text}</h3>;
};
