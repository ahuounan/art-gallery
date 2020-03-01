import { combineReducers } from 'redux';
import { paintingsReducer } from './paintings/reducer';
import { collectionsReducer } from './collections/reducer';
import { yearsReducer } from './years/reducer';

export const rootReducer = combineReducers({
  collections: collectionsReducer,
  paintings: paintingsReducer,
  years: yearsReducer
});
