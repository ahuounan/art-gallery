import React from 'react';

import { Screen } from 'components/Screen';
import { usePaintings, useFetchPaintings } from 'store/paintings/hooks';
import { Exhibit } from 'components/Exhibit';

export const Home = () => {
  useFetchPaintings();
  const paintings = usePaintings();

  return (
    <Screen>
      <Exhibit paintings={paintings} />
    </Screen>
  );
};
