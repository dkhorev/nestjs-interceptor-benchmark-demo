import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { RedisInterceptor } from './redis.interceptor';
import { RedisService } from './redis.service';

@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Get('/blocking')
  async before(): Promise<string> {
    await this.redisService.queueFakeJob();

    return this.redisService.getHello();
  }

  @UseInterceptors(RedisInterceptor)
  @Get('/non-blocking')
  after(): string {
    return this.redisService.getHello();
  }
}
