import { makeRedis } from "./adapters/redis/redis";
import { makeRegisterUseCase } from "../use-cases/register";
import { makeFindByIdUseCase } from "../use-cases/find-by-id";

export const Adapters = {
  cache: makeRedis(),
};
export const UseCases = {
  register: makeRegisterUseCase({
    cacheManagerPort: Adapters.cache,
  }),
  findById: makeFindByIdUseCase({
    cacheManagerPort: Adapters.cache,    
  }),
};
