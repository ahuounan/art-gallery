import { Dictionary } from 'types';

export interface CollectionsState {
  collections: Dictionary<Collection>;
  collectionsList: number[];
  isFetching: boolean;
  error: boolean;
}

export interface Collection {
  name: string;
  id: number;
  paintings: number[];
}
