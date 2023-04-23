import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {}

  async getCache<T>(key: string, reqFunction: () => Promise<T>): Promise<T> {
    const data: T = await this.cacheManager.get(key);

    if (data) {
      return data;
    }

    const res: T = await reqFunction();

    await this.cacheManager.set(key, res);

    return res;
  }
}
