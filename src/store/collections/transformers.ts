import { Painting } from '../paintings/types';
import { Dictionary } from 'store/types';

const paintingsToCollections = (paintings: Painting[]) => {
  const collections: Dictionary<any> = {};
  const collectionsList: number[] = [];
  paintings.forEach(({ collection: collectionId, collection_name: collectionName, id }) => {
    const collection = collections[collectionId];
    if (!collection) {
      collectionsList.push(collectionId);
      collections[collectionId] = {
        id: collectionId,
        name: collectionName,
        paintings: [id]
      };
      return;
    }
    collections[collectionId].paintings.push(id);
  });
  return { collections, collectionsList };
};

export const CollectionsTransformers = {
  paintingsToCollections
};
