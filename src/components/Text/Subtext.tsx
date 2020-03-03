import React from 'react';

import { CSSObj } from 'types';
import { styles } from 'styles';

interface Props {
  text: string;
}

const css: CSSObj = {
  margin: 0,
  fontSize: styles.fontSize1,
  fontFamily: styles.fontSans,
  fontWeight: styles.fontWeight1
};

export const Subtext = (props: Props) => {
  const { text } = props;
  return <p css={css}>{text}</p>;
};
