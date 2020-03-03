import React from 'react';

import { styles } from 'styles';
import { CSSObj } from 'types';

interface Props {
  text: string;
}

const css: CSSObj = {
  margin: 0,
  padding: 0,
  fontSize: styles.fontSize4,
  lineHeight: styles.fontSize4,
  fontFamily: styles.fontSans,
  fontWeight: styles.fontWeight3
};

export const Title = (props: Props) => {
  const { text } = props;
  return <h2 css={css}>{text}</h2>;
};
