import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { rootReducer } from 'store/root';

const store = createStore(rootReducer);

interface Props {
  children?: React.ReactNode;
}

export const Store = (props: Props) => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};
