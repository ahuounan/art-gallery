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
        opacity: 0.9,
        transition: 'transform 0.15s ease-in, opacity 0.15s ease-in',
        '&:hover': { transform: 'translateY(0)', opacity: 1 }
      }}
    >
      {paintings.map((id, index) => {
        const handlePress = () => onThumbnailPress(index);
        return <Thumbnail key={id} id={id} onPress={handlePress} />;
      })}
    </div>
  );
};
