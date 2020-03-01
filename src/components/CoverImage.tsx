import React from 'react';
import { OnLoadEvent, CSSObj } from 'types';

export interface CoverImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width: number;
  height: number;
  css?: CSSObj;
  onLoad?: (event: OnLoadEvent) => void;
}

export const CoverImage = (props: CoverImageProps) => {
  const { width, height, onLoad, css, ...imgProps } = props;
  const [dimensions, setDimensions] = React.useState({ naturalHeight: 0, naturalWidth: 0 });

  const handleLoad = (event: OnLoadEvent) => {
    const {
      target: { naturalHeight, naturalWidth }
    } = event;
    setDimensions({ naturalHeight, naturalWidth });
    onLoad && onLoad(event);
  };

  const { naturalHeight, naturalWidth } = dimensions;
  let adjustedHeight = 0;
  let adjustedWidth = 0;

  const constrainedByHeight = naturalWidth / naturalHeight > width / height;

  if (naturalWidth && naturalWidth) {
    if (constrainedByHeight) {
      adjustedWidth = width;
      adjustedHeight = (width * naturalHeight) / naturalWidth;
    } else {
      adjustedHeight = height;
      adjustedWidth = (height * naturalWidth) / naturalHeight;
    }
  }

  return (
    <img
      css={{
        height: adjustedHeight,
        width: adjustedWidth,
        ...css
      }}
      {...imgProps}
      onLoad={handleLoad}
    />
  );
};
