import { PaintingsActions, PaintingsActionTypes } from './actions';

const initialState = {
  paintings: {},
  isFetching: false,
  error: false
};

export const paintingsReducer = (state = initialState, action: PaintingsActions) => {
  switch (action.type) {
    case PaintingsActionTypes.PAINTINGS_FETCH_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case PaintingsActionTypes.PAINTINGS_FETCH_FAILURE: {
      return {
        ...state,
        error: true
      };
    }
    case PaintingsActionTypes.PAINTINGS_FETCH_SUCCESS: {
      return {
        ...state,
        paintings: {
          ...state.paintings,
          ...action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};
