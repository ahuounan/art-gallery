import React from 'react';

import { Screen } from 'components/Screen';
import { useDispatch } from 'react-redux';
import { PaintingsActions } from 'store/paintings/actions';

export const Home = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(PaintingsActions.fetchPaintingsRequest());
  });
  return <Screen>Home</Screen>;
};
