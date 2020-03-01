import { Dictionary } from 'types';

export interface YearsState {
  years: Dictionary<Year>;
  yearsList: number[];
  isFetching: boolean;
  error: boolean;
}

export interface Year {
  year: number;
  paintings: number[];
}
