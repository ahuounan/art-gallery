import React from 'react';
import { useParams } from 'react-router-dom';

import { Screen } from 'components/Screen';
import { Exhibit } from 'components/Exhibit';
import { useCollectionPaintings } from 'store/collections/hooks';

export const Collection = () => {
  const { id } = useParams();
  const paintings = useCollectionPaintings(id);

  return (
    <Screen>
      <Exhibit paintingIds={paintings} />
    </Screen>
  );
};
