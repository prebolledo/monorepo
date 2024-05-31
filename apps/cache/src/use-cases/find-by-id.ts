import { Cache } from "../domain/entities/cache";
import { CacheManagerPort } from "../domain/ports/cache-manager";

export type FindByIdUseCase = (id: string) => Promise<Cache | null>;

export const makeFindByIdUseCase = ({
  cacheManagerPort,
}:{
  cacheManagerPort: CacheManagerPort,
}): FindByIdUseCase => {

  const useCase: FindByIdUseCase = async (id: string): Promise<Cache | null> => {
    try {
      const cache: Cache | null = await cacheManagerPort.findById(id);
      return cache;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return useCase;
};
