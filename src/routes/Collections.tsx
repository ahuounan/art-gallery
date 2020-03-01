import React from 'react';
import { Screen } from 'components/Screen';
import { useCollections } from 'store/collections/hooks';
import { Link } from 'react-router-dom';

export const Collections = () => {
  const collections = useCollections();
  return (
    <Screen>
      Collections
      {collections.map(collection => (
        <Link to={`/collection/${collection}`} key={collection}>
          {collection}
        </Link>
      ))}
    </Screen>
  );
};
