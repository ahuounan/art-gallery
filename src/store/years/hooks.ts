import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/types';
import { YearsSelectors } from './selectors';

export const useYears = () => {
  const getYearIds = useMemo(YearsSelectors.makeGetYearIds, []);
  const years = useSelector((state: RootState) => getYearIds(state));
  return years;
};

export const useYearPaintings = (year: number) => {
  const getYear = useMemo(YearsSelectors.makeGetYear, []);
  const years = useSelector((state: RootState) => getYear(state, year));
  return years.paintings;
};
