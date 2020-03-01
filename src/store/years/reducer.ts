import { PaintingsActionTypes, PaintingsActions } from 'store/paintings/actions';
import { YearsTransformers } from './transformers';

const initialState = {
  yearsList: [],
  years: {},
  isFetching: false,
  error: false
};

export const yearsReducer = (state = initialState, action: PaintingsActions) => {
  switch (action.type) {
    case PaintingsActionTypes.PAINTINGS_FETCH_SUCCESS: {
      const { years, yearsList } = YearsTransformers.paintingsToYears(action.payload);
      return {
        ...state,
        yearsList,
        years: {
          ...state.years,
          ...years
        }
      };
    }
    default: {
      return state;
    }
  }
};
