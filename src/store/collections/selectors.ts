import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { PaintingsSelectors } from '../paintings/selectors';
import { CollectionsState } from './types';

const getState = (state: RootState): CollectionsState => state.collections;

const getCollectionById = (state: RootState, id: number) => getState(state).collections[id];

const getCollectionIds = (state: RootState) => getState(state).collectionsList;

const getCollectionByIdDenormalized = (state: RootState, id: number) => {
  const collection = getCollectionById(state, id);
  const getPaintingById = PaintingsSelectors.makeGetPaintingById();
  const paintings = collection.paintings.map(id => getPaintingById(state, id));
  return {
    ...collection,
    paintings
  };
};

const makeGetState = () => createSelector([getState], obj => obj);
const makeGetCollectionById = () => createSelector([getCollectionById], obj => obj);
const makeGetCollectionIds = () => createSelector([getCollectionIds], obj => obj);
const makeGetCollectionByIdDenormalized = () =>
  createSelector([getCollectionByIdDenormalized], obj => obj);

export const CollectionsSelectors = {
  makeGetState,
  makeGetCollectionIds,
  makeGetCollectionById,
  makeGetCollectionByIdDenormalized
};
