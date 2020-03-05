import React from 'react';

import { Painting } from './Painting';
import { ArrowButton, ButtonDirections } from './ArrowButton';
import { CSSObj } from 'types';
import { FilmRoll } from './FilmRoll';

interface Props {
  paintings: number[];
}

const arrowStyle: CSSObj = {
  top: '50%',
  position: 'absolute'
};

const rightArrowStyle = {
  right: '10px'
};
const leftArrowStyle = {
  left: '10px'
};

export const Exhibit = (props: Props) => {
  const { paintings } = props;
  const [currentIndex, setIndex] = React.useState(0);

  return (
    <div
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingBottom: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <ArrowButton
        onPress={() => setIndex(currentIndex - 1)}
        disabled={currentIndex === 0}
        direction={ButtonDirections.LEFT}
        style={{ ...arrowStyle, ...leftArrowStyle }}
      />
      <Painting id={paintings[currentIndex]} />
      <ArrowButton
        onPress={() => setIndex(currentIndex + 1)}
        disabled={currentIndex >= paintings.length - 1}
        direction={ButtonDirections.RIGHT}
        style={{ ...arrowStyle, ...rightArrowStyle }}
      />
      <FilmRoll windowSize={5} paintings={paintings} onThumbnailPress={setIndex} />
    </div>
  );
};
