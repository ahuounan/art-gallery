import { all } from 'redux-saga/effects';
import { PaintingsSagas } from './paintings/sagas';

export function* rootSaga() {
  yield all([...PaintingsSagas]);
}
