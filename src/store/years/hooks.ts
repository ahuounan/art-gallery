import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/types';
import { YearsSelectors } from './selectors';

export const useYears = () => {
  const getYearIds = useMemo(YearsSelectors.makeGetYearIds, []);
  const years = useSelector((state: RootState) => getYearIds(state));
  return years;
};
