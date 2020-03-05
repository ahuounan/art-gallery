import React from 'react';

import { Screen } from 'components/Screen';
import { usePaintings } from 'store/paintings/hooks';
import { Exhibit } from 'components/Exhibit';

export const Home = () => {
  const paintings = usePaintings();

  return (
    <Screen>
      <Exhibit paintingIds={paintings} />
    </Screen>
  );
};
