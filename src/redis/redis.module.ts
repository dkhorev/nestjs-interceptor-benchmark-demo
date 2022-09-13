import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { RedisController } from './redis.controller';
import { RedisService } from './redis.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: +process.env.REDIS_PORT || 6379,
      },
      defaultJobOptions: {
        timeout: 1000,
        removeOnComplete: true,
        removeOnFail: true,
      },
    }),
    BullModule.registerQueue({
      name: 'QUEUE_DEMO',
    }),
  ],
  controllers: [RedisController],
  providers: [RedisService],
})
export class RedisModule {}
