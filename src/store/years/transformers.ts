import { Dictionary } from 'types';

import { Painting } from '../paintings/types';
import { Year } from './types';

const paintingsToYears = (paintings: Painting[]) => {
  const years: Dictionary<Year> = {};
  const yearsList: number[] = [];
  paintings.forEach(({ year, id }) => {
    if (!year) return;
    const yearData = years[year];
    if (!yearData) {
      years[year] = {
        year,
        paintings: [id]
      };
      yearsList.push(year);
      return;
    }
    years[year].paintings.push(id);
  });
  yearsList.sort((a, b) => a - b);
  return { years, yearsList };
};

export const YearsTransformers = {
  paintingsToYears
};
