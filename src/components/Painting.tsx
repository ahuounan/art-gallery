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

  const { name, srcT, srcL, srcM, srcH } = painting;

  const { height, width } = dimensions;

  return (
    <ProgressiveImage
      height={height}
      width={width}
      key={id}
      srcProgression={[srcT, srcL, srcM, srcH]}
      alt={name}
      css={{
        boxShadow: '20px 20px 60px #d6d6d6, -20px -20px 60px #ffffff'
      }}
    />
  );
};
