import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/types';
import { CollectionsSelectors } from './selectors';

export const useCollections = () => {
  const getCollectionsDenormalized = useMemo(CollectionsSelectors.makeGetCollectionIds, []);
  const collections = useSelector((state: RootState) => getCollectionsDenormalized(state));
  return collections;
};
