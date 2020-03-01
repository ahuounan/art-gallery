import { combineReducers } from 'redux';
import { paintingsReducer } from './paintings/reducer';
import { collectionsReducer } from './collections/reducer';
import { yearsReducer } from './years/reducer';

export const rootReducer = combineReducers({
  collection: collectionsReducer,
  paintings: paintingsReducer,
  years: yearsReducer
});
