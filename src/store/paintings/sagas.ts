import { call, put, takeLatest } from 'redux-saga/effects';
import { keyBy } from 'lodash';

import { PaintingsActionTypes, PaintingsActions } from './actions';
import { PaintingsApi } from './api';

function* handlePaintingsFetchRequest() {
  try {
    const paintings = yield call(PaintingsApi.get);
    yield put(PaintingsActions.fetchPaintingsSuccess({ paintings: keyBy(paintings, 'id') }));
  } catch (e) {
    yield put(PaintingsActions.fetchPaintingsFailure());
  }
}

export const PaintingsSagas = [
  takeLatest(PaintingsActionTypes.PAINTINGS_FETCH_REQUEST, handlePaintingsFetchRequest)
];
