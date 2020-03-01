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
    <button key={id} onMouseUp={onPress}>
      {painting.name}
    </button>
  );
};
