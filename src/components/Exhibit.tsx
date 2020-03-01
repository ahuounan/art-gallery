import React from 'react';

import { Painting } from './Painting';
import { Thumbnail } from './Thumbnail';
import { ArrowButton, ButtonDirections } from './ArrowButton';
import { CSSObj } from 'types';

interface Props {
  paintings: number[];
}

const arrowStyle: CSSObj = {
  position: 'absolute'
};

const rightArrowStyle = {
  backgroundColor: 'pink'
};
const leftArrowStyle = {
  backgroundColor: 'green'
};

export const Exhibit = (props: Props) => {
  const { paintings } = props;
  const [currentIndex, setIndex] = React.useState(0);

  return (
    <div>
      <Painting id={paintings[currentIndex]} />
      <ArrowButton
        onPress={() => setIndex(currentIndex - 1)}
        disabled={currentIndex === 0}
        direction={ButtonDirections.LEFT}
        style={{ ...arrowStyle, ...leftArrowStyle }}
      />
      <ArrowButton
        onPress={() => setIndex(currentIndex + 1)}
        disabled={currentIndex >= paintings.length - 1}
        direction={ButtonDirections.RIGHT}
        style={{ ...arrowStyle, ...rightArrowStyle }}
      />
      {paintings.map((id, index) => {
        const handlePress = () => setIndex(index);
        return <Thumbnail key={id} id={id} onPress={handlePress} />;
      })}
    </div>
  );
};
