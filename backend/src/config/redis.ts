import Redis from 'ioredis';
import { logger } from './logger';

// Only initialize Redis if explicitly configured
const isRedisEnabled = process.env.REDIS_ENABLED === 'true';

const redisConfig = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD || undefined,
  retryStrategy: (times: number) => {
    // Disable retry if Redis is not enabled
    if (!isRedisEnabled) return null;
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
  lazyConnect: true, // Don't connect immediately
};

export const redis = isRedisEnabled ? new Redis(redisConfig) : null;

if (redis) {
  redis.connect().catch(() => {
    logger.warn('⚠️ Redis connection failed, caching will be disabled');
  });

  redis.on('connect', () => {
    logger.info('✅ Redis connected successfully');
  });

  redis.on('error', (error) => {
    logger.error('❌ Redis connection error:', error.message);
  });
} else {
  logger.info('ℹ️  Redis is disabled, caching features will not be available');
}

// Cache helper functions
export const cacheHelper = {
  /**
   * Get cached data
   */
  async get(key: string) {
    if (!redis) return null;
    try {
      const data = await redis!.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      logger.error('Redis get error:', error);
      return null;
    }
  },

  /**
   * Set cache data with TTL
   */
  async set(key: string, value: any, ttl: number = parseInt(process.env.REDIS_TTL || '3600')) {
    if (!redis) return false;
    try {
      await redis!.setex(key, ttl, JSON.stringify(value));
      return true;
    } catch (error) {
      logger.error('Redis set error:', error);
      return false;
    }
  },

  /**
   * Delete cached data
   */
  async del(key: string) {
    if (!redis) return false;
    try {
      await redis!.del(key);
      return true;
    } catch (error) {
      logger.error('Redis delete error:', error);
      return false;
    }
  },

  /**
   * Clear all cache
   */
  async flush() {
    if (!redis) return false;
    try {
      await redis!.flushall();
      return true;
    } catch (error) {
      logger.error('Redis flush error:', error);
      return false;
    }
  },
};

export default redis;
