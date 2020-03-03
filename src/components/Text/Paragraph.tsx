import React from 'react';

import { styles } from 'styles';
import { CSSObj } from 'types';

interface Props {
  text: string;
}

const css: CSSObj = {
  margin: 0,
  fontSize: styles.fontSize1,
  fontFamily: styles.fontSans,
  fontWeight: styles.fontWeight1
};

export const Paragraph = (props: Props) => {
  const { text } = props;
  return <p css={css}>{text}</p>;
};
