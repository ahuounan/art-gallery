import React from 'react';
import { CSSObj } from 'types';

export enum ButtonDirections {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

interface Props {
  direction: ButtonDirections;
  onPress: () => void;
  disabled: boolean;
  style: CSSObj;
}

export const ArrowButton = (props: Props) => {
  const { style, direction, onPress, disabled = false } = props;

  return (
    <button css={style} onMouseUp={() => !disabled && onPress()}>
      {direction}
    </button>
  );
};
