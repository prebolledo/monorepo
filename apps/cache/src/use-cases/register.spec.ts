import { CacheManagerPort } from '../domain/ports/cache-manager';
import { CacheId } from '../domain/value-objects/CacheId';
import { makeRegisterUseCase } from './register';


const cacheManagerPortMock: CacheManagerPort = {
  register: jest.fn().mockReturnValue(Promise.resolve(true)),
  findById: jest.fn().mockReturnValue(Promise.resolve(null)),
};

describe('use case: register', () => {

  beforeAll(() => {
    jest.clearAllMocks();
  });

  it('should register new value into cache', async () => {
    const value = 'this value';
    const registerUseCase = makeRegisterUseCase({
      cacheManagerPort: cacheManagerPortMock,
    });
    const cacheId: CacheId = await registerUseCase(value);

    expect(cacheManagerPortMock.register).toHaveBeenCalledTimes(1);
    expect(cacheId).toBeDefined();
  });

  it('should throw an error trying to register new value into cache', async () => {
    const error = new Error('error');
    cacheManagerPortMock.register = jest.fn().mockImplementation(() => {
      throw error;
    });
    const value = 'this value';
    const registerUseCase = makeRegisterUseCase({
      cacheManagerPort: cacheManagerPortMock,
    });

    expect(registerUseCase(value)).rejects.toThrow(error);
  });  
});
