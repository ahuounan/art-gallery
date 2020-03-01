import React from 'react';
import { Screen } from 'components/Screen';
import { useCollections } from 'store/collections/hooks';

export const Collections = () => {
  const collections = useCollections();
  return (
    <Screen>
      Collections
      {collections.map(collection => (
        <div key={collection}>{collection}</div>
      ))}
    </Screen>
  );
};
