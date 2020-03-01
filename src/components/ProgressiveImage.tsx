import React from 'react';
import { CoverImage, CoverImageProps } from './CoverImage';
import { Loader } from './Loader';

interface Props extends CoverImageProps {
  srcProgression: string[];
}

export const ProgressiveImage = (props: Props) => {
  const { srcProgression, width, height, ...imgProps } = props;
  const [srcIndex, setSrcIndex] = React.useState(0);
  const [showLoader, setShowLoader] = React.useState(true);
  const handleLoad = () => {
    if (srcIndex === 0) setShowLoader(false);
    if (srcIndex >= srcProgression.length - 1) return;
    setSrcIndex(srcIndex + 1);
  };

  return (
    <div>
      {showLoader && <Loader />}
      <CoverImage
        {...imgProps}
        width={width}
        height={height}
        src={srcProgression[srcIndex]}
        onLoad={handleLoad}
        css={{
          filter: `blur(${srcProgression.length - 1 - srcIndex}px)`
        }}
      />
    </div>
  );
};
