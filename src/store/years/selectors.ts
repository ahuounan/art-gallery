import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { PaintingsSelectors } from '../paintings/selectors';
import { YearsState } from './types';

const getState = (state: RootState): YearsState => state.years;

const getYear = (state: RootState, year: number) => getState(state).years[year];

const getYears = (state: RootState) => getState(state).yearsList;

const getYearDenormalized = (state: RootState, id: number) => {
  const year = getYear(state, id);
  const getPaintingById = PaintingsSelectors.makeGetPaintingById();
  const paintings = year.paintings.map((id: number) => getPaintingById(state, id));
  return {
    ...year,
    paintings
  };
};

const makeGetState = () => createSelector([getState], obj => obj);
const makeGetYear = () => createSelector([getYear], obj => obj);
const makeGetYearIds = () => createSelector([getYears], obj => obj);
const makeGetYearByIdDenormalized = () => createSelector([getYearDenormalized], obj => obj);

export const YearsSelectors = {
  makeGetState,
  makeGetYearIds,
  makeGetYear,
  makeGetYearByIdDenormalized
};
