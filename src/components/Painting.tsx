import React from 'react';
import { ProgressiveImage } from 'components/ProgressiveImage';
import { Loader } from 'components/Loader';
import { usePaintingById } from 'store/paintings/hooks';

interface Props {
  id: number;
}

export const Painting = (props: Props) => {
  const { id } = props;
  const painting = usePaintingById(id);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight * 0.8,
    width: window.innerWidth * 0.8
  });
  const handleResize = () => {
    setDimensions({ height: window.innerHeight * 0.8, width: window.innerWidth * 0.8 });
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize, true);
    return () => {
      window.removeEventListener('resize', handleResize, true);
    };
  });

  if (!id) return <Loader />;

  const { name, medium, year, dimensions: paintingDimensions, srcT, srcL, srcM, srcH } = painting;

  const { height, width } = dimensions;

  return (
    <div>
      <ProgressiveImage
        height={height}
        width={width}
        key={id}
        srcProgression={[srcT, srcL, srcM, srcH]}
        alt={name}
        css={{
          boxShadow: '20px 20px 60px #d6d6d6, -20px -20px 60px #ffffff'
        }}
      >
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
            background: 'transparent',
            transition: 'background 0.1s ease-in, color 0.1s ease-in',
            '&:hover': {
              color: 'white',
              background: 'rgba(0, 0, 0, 0.8)'
            }
          }}
        >
          {name}
          {medium}
          {year}
          {paintingDimensions}
        </div>
      </ProgressiveImage>
    </div>
  );
};
