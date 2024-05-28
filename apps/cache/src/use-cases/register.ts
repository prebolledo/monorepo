import { Cache, makeCache } from "../domain/entities/cache";
import { CacheManagerPort } from "../domain/ports/cache-manager";
import { CacheId } from "../domain/value-objects/CacheId";

export type RegisterUseCase = (value: string) => Promise<CacheId>;

export const makeRegisterUseCase = ({
  cacheManagerPort,
}:{
  cacheManagerPort: CacheManagerPort,
}): RegisterUseCase => {

  const useCase: RegisterUseCase = async (value: string): Promise<CacheId> => {
    const cache: Cache = makeCache({
      value,
    });
    
    try {
      const result = await cacheManagerPort.register(cache);
      
      if (!result) {
        throw new Error("error tryinng to register value into cache");
      }

    } catch (error) {
      console.log(error);
      throw error;
    }
    return cache.id;
  };

  return useCase;
};
