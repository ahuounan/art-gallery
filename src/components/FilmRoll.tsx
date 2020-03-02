import React from 'react';
import { Thumbnail } from './Thumbnail';

interface Props {
  paintings: number[];
  onThumbnailPress: (index: number) => void;
}

export const FilmRoll = (props: Props) => {
  const { paintings, onThumbnailPress } = props;
  return (
    <div
      css={{
        position: 'absolute',
        display: 'flex',
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'scroll',
        background: 'black',
        alignItems: 'center',
        padding: '5px 0 5px 0',
        transform: 'translateY(70px)',
        transition: 'transform 0.15s ease-in, opacity 0.15s ease-in',
        '&:hover': { transform: 'translateY(0)', opacity: 1 }
      }}
    >
      <div
        css={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          opacity: 0.5,
          background: `linear-gradient(
            to bottom,
            hsl(0, 0%, 100%) 0%,
            hsl(0, 0%, 90.17%) 2.8%,
            hsl(0, 0%, 80.68%) 6.5%,
            hsl(0, 0%, 71.55%) 11%,
            hsl(0, 0%, 62.8%) 16.1%,
            hsl(0, 0%, 54.43%) 21.9%,
            hsl(0, 0%, 46.48%) 28.3%,
            hsl(0, 0%, 38.95%) 35.2%,
            hsl(0, 0%, 31.88%) 42.4%,
            hsl(0, 0%, 25.3%) 50.1%,
            hsl(0, 0%, 19.25%) 58.1%,
            hsl(0, 0%, 13.77%) 66.3%,
            hsl(0, 0%, 8.94%) 74.6%,
            hsl(0, 0%, 4.87%) 83.1%,
            hsl(0, 0%, 1.72%) 91.6%,
            hsl(0, 0%, 0%) 100%
          )`,
          transition: 'transform 0.15s ease-in, opacity 0.15s ease-in',
          '&:hover': { opacity: 0, zIndex: 0 }
        }}
      />
      {paintings.map((id, index) => {
        const handlePress = () => onThumbnailPress(index);
        return <Thumbnail key={id} id={id} onPress={handlePress} />;
      })}
    </div>
  );
};
