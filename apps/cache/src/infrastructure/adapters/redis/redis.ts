import { CacheManagerPort } from "../../../domain/ports/cache-manager";
import { Cache } from "../../../domain/entities/cache";

const cacheTable: Cache[] = [];
export const makeRedis = (): CacheManagerPort => {

  const register = async (cache: Cache): Promise<boolean> => {
    cacheTable.push(cache);
    return Promise.resolve(true);
  };

  const findById = async (id: string): Promise<Cache> => {
    console.log(id);
    return Promise.resolve(cacheTable[0] ?? null);
  };

  return {
    register,
    findById,
  };
};