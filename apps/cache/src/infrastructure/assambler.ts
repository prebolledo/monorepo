import { makeRedis } from "./adapters/redis/redis";
import { makeRegisterUseCase } from "../use-cases/register";

export const Adapters = {
  cache: makeRedis(),
};
export const UseCases = {
  register: makeRegisterUseCase({
    cacheManagerPort: Adapters.cache,
  }),
};
