import React from 'react';
import { usePaintingById } from 'store/paintings/hooks';

interface Props {
  id: number;
}

export const Painting = (props: Props) => {
  const { id } = props;
  const painting = usePaintingById(id);
  if (!id) return <div>loading</div>;
  const { name } = painting;
  return <div>{name}</div>;
};
