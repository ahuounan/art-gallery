import React from 'react';

import { Loader } from './Loader';

interface Props {
  onPress?: () => void;
  onLoad?: () => void;
  src?: string;
  name?: string;
}

export const Thumbnail = (props: Props) => {
  const { onLoad, onPress, src, name } = props;
  const [isLoading, setIsLoading] = React.useState(true);
  const handleLoad = () => {
    setIsLoading(false);
    onLoad && onLoad();
  };

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
      onMouseUp={onPress}
    >
      {isLoading && (
        <div
          css={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: '#fcfcfc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Loader height={'32px'} width={'30px'} />
        </div>
      )}
      <img
        css={{
          maxHeight: '100%',
          maxWidth: '100%',
          backgroundSize: 'contain'
        }}
        onLoad={handleLoad}
        src={src}
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
        {name}
      </div>
    </button>
  );
};
