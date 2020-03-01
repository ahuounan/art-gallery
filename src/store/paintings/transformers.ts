import { keyBy } from 'lodash';

import { Painting } from './types';

const paintingsDictionary = (paintings: Painting[]) => {
  return keyBy(paintings, 'id');
};

export const PaintingsTransformers = {
  paintingsDictionary
};
