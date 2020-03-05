import React from 'react';
import { Thumbnail } from './Thumbnail';
import { Dictionary, CSSObj } from 'types';
import { ArrowButton, ButtonDirections } from './ArrowButton';
import { Painting } from 'store/paintings/types';

interface Props {
  paintings: Painting[];
  windowSize?: number;
  onThumbnailPress: (index: number) => void;
}

const styles: Dictionary<CSSObj> = {
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    transform: 'translateY(50px)',
    opacity: 0.9,
    transition: 'transform 0.15s ease-in, opacity 0.15s ease-in',
    '&:hover': { transform: 'translateY(0)', opacity: 1 }
  }
};

enum Direction {
  LEFT = -1,
  RIGHT = 1
}

const useScrollable = () => {
  const elementRef = React.useRef<HTMLDivElement>(null);
  const [leftPosition, setLeftPosition] = React.useState(0);
  const scrollWidth = elementRef?.current?.scrollWidth || 0;
  const clientWidth = elementRef?.current?.clientWidth || 0;
  const rightEndPosition = scrollWidth - clientWidth;

  const handleScroll = (direction: Direction) => {
    const newPosition = leftPosition + direction * (clientWidth || 0);
    let newLeftPosition: number;

    if (newPosition < 0) {
      newLeftPosition = 0;
    } else if (newPosition > rightEndPosition) {
      newLeftPosition = rightEndPosition;
    } else {
      newLeftPosition = newPosition;
    }
    setLeftPosition(newLeftPosition);
    elementRef.current?.scroll({ left: newLeftPosition, behavior: 'smooth' });
  };

  return {
    elementRef,
    handleScroll,
    reachedLeft: leftPosition === 0,
    reachedRight: leftPosition === rightEndPosition
  };
};

export const FilmRoll = (props: Props) => {
  const { paintings, onThumbnailPress, windowSize = 1 } = props;
  const [lastLoadedIndex, setLastLoadedIndex] = React.useState(1);
  const currentPaintings = paintings.slice(0, lastLoadedIndex + 1);
  const loadStateArray = React.useRef<boolean[]>([]).current;
  const { elementRef, handleScroll, reachedLeft, reachedRight } = useScrollable();

  return (
    <div css={styles.container}>
      <div
        ref={elementRef}
        css={{
          display: 'flex',
          overflow: 'hidden',
          background: 'black',
          alignItems: 'center',
          padding: '5px 0 5px 0'
        }}
      >
        {currentPaintings.map((painting, index) => {
          const handlePress = () => onThumbnailPress(index);
          const handleLoad = () => {
            loadStateArray[index] = true;
            if (loadStateArray.every(state => state)) {
              setLastLoadedIndex(lastLoadedIndex + windowSize + 1);
            }
          };
          loadStateArray[index] = !!loadStateArray[index];
          return (
            <Thumbnail
              key={painting.id}
              src={painting.srcT}
              name={painting.name}
              onPress={handlePress}
              onLoad={handleLoad}
            />
          );
        })}
        {Array(paintings.length - currentPaintings.length)
          .fill(undefined)
          .map((_, index) => (
            <Thumbnail key={index} />
          ))}
      </div>
      <ArrowButton
        disabled={reachedLeft}
        direction={ButtonDirections.LEFT}
        onPress={() => handleScroll(Direction.LEFT)}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 10
        }}
      />

      <ArrowButton
        disabled={reachedRight}
        direction={ButtonDirections.RIGHT}
        onPress={() => handleScroll(Direction.RIGHT)}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          zIndex: 10
        }}
      />
    </div>
  );
};
