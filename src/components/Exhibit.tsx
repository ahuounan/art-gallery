import React from 'react';

import { Painting } from './Painting';
import { Thumbnail } from './Thumbnail';
import { ArrowButton, ButtonDirections } from './ArrowButton';
import { CSSObj } from 'types';

interface Props {
  paintings: number[];
}

const arrowStyle: CSSObj = {
  top: '50%',
  position: 'absolute'
};

const rightArrowStyle = {
  right: 0
};
const leftArrowStyle = {
  left: 0
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
      <div
        css={{
          position: 'absolute',
          display: 'flex',
          bottom: 0,
          left: 0,
          right: 0,
          overflow: 'scroll',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          alignItems: 'center',
          padding: '5px 0 5px 0',
          transform: 'translateY(50px)',
          transition: 'transform 0.15s ease-in',
          '&:hover': { transform: 'translateY(0)' }
        }}
      >
        {paintings.map((id, index) => {
          const handlePress = () => setIndex(index);
          return <Thumbnail key={id} id={id} onPress={handlePress} />;
        })}
      </div>
    </div>
  );
};
