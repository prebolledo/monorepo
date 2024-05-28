import { CacheManagerPort } from "./domain/ports/cache-manager";
import { makeRedis } from "./infrastructure/adapters/redis/redis";
import { makeServer } from "./infrastructure/http/server";

const cacheManagerPort: CacheManagerPort = makeRedis();
const server = makeServer(cacheManagerPort);

server();