import { combineReducers } from 'redux';
import { paintingsReducer } from './paintings/reducer';

export const rootReducer = combineReducers({
  paintings: paintingsReducer
});
