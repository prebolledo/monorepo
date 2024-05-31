import { CacheManagerPort } from '../../../domain/ports/cache-manager';
import { Cache, makeCache } from '../../../domain/entities/cache';
import Redis from 'ioredis';

export const makeRedis = (): CacheManagerPort => {
  const redis = new Redis(6379, process.env.REDIS_HOST, {});

  const register = async (cache: Cache): Promise<boolean> => {
    const result = await redis.set(cache.id.get(), JSON.stringify({
      id: cache.id.get(),
      value: cache.value,
    }), 'EX', 3600);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return Promise.resolve('OK' === result);
  };

   
  const findById = async (id: string): Promise<Cache | null> => {
    const data = await redis.get(id);
    let cache: Cache | null = null;
    if (data) {
      const obj = JSON.parse(data);
      cache = makeCache({
        id,
        value: obj.value,
      });
    }
    return cache;
  };

  return {
    register,
    findById,
  };
};