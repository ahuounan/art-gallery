import React from 'react';
import { useParams } from 'react-router-dom';

import { Screen } from 'components/Screen';
import { Exhibit } from 'components/Exhibit';
import { useYearPaintings } from 'store/years/hooks';

export const Year = () => {
  const { year } = useParams();
  const paintings = useYearPaintings(year);

  return (
    <Screen>
      <Exhibit paintingIds={paintings} />
    </Screen>
  );
};
