import { Cache } from "../entities/cache";

export interface CacheManagerPort {
  register: (cache: Cache) => Promise<boolean>;
  findById: (id: string) => Promise<Cache | null>;
};