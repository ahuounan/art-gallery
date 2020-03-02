import React from 'react';
import { usePaintingById } from 'store/paintings/hooks';

interface Props {
  id: number;
  onPress?: () => void;
}

export const Thumbnail = (props: Props) => {
  const { id, onPress } = props;
  const painting = usePaintingById(id);

  return (
    <button
      css={{
        display: 'inline-block',
        height: '100px',
        width: '100px',
        padding: 0,
        position: 'relative',
        flexShrink: 0,
        border: 'none',
        outline: 'none',
        margin: '0 2.5px 0 2.5px',
        background: '#fcfcfc',
        borderRadius: '2px',
        zIndex: 10
      }}
      key={id}
      onMouseUp={onPress}
    >
      <img
        css={{
          maxHeight: '100%',
          maxWidth: '100%',
          backgroundSize: 'contain'
        }}
        src={painting.srcT}
      />
      <div
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'transparent',
          '&:hover': {
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
          }
        }}
      >
        {painting.name}
      </div>
    </button>
  );
};
