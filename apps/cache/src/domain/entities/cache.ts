import { CacheId } from '../value-objects/CacheId';
import { v4 as uuidv4 } from 'uuid';

export interface Cache {
  id: CacheId,
  value: string,
  createdAt?: Date,
  expirationAt?: Date,
};

export const makeCache = ({
  id,
  value,
}:{
  id?: string,
  value: string,
}): Cache => {

  let cacheId: CacheId;

  if (!id) {
    cacheId = new CacheId(uuidv4());
  } else {
    cacheId = new CacheId(id);
  }

  const cache: Cache = {
    id: cacheId,
    value,
  };
  return cache;

};