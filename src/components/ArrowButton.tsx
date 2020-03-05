import React from 'react';
import { CSSObj } from 'types';

import leftArrow from 'assets/left-arrow.png';
import rightArrow from 'assets/right-arrow.png';

export enum ButtonDirections {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

interface Props {
  direction: ButtonDirections;
  onPress: () => void;
  disabled: boolean;
  style?: CSSObj;
}

export const ArrowButton = (props: Props) => {
  const { style, direction, onPress, disabled = false } = props;

  const arrowImage = direction === ButtonDirections.LEFT ? leftArrow : rightArrow;

  return (
    <button
      css={{
        ...style,
        border: 'none',
        outline: 'none',
        background: 'transparent',
        cursor: 'pointer',
        opacity: `${disabled ? 0.5 : 1}`
      }}
      onMouseUp={() => !disabled && onPress()}
    >
      <img src={arrowImage} />
    </button>
  );
};
