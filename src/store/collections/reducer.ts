import { PaintingsActionTypes, PaintingsActions } from 'store/paintings/actions';
import { CollectionsTransformers } from './transformers';

const initialState = {
  collections: {},
  collectionsList: [],
  isFetching: false,
  error: false
};

export const collectionsReducer = (state = initialState, action: PaintingsActions) => {
  switch (action.type) {
    case PaintingsActionTypes.PAINTINGS_FETCH_SUCCESS: {
      const { collections, collectionsList } = CollectionsTransformers.paintingsToCollections(
        action.payload
      );
      return {
        ...state,
        collectionsList,
        collections: {
          ...state.collections,
          ...collections
        }
      };
    }
    default: {
      return state;
    }
  }
};
