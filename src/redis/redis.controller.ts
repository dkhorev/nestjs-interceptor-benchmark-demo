import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { RedisInterceptor } from './redis.interceptor';
import { RedisService } from './redis.service';

@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Get('/before')
  async before(): Promise<string> {
    await this.redisService.queueFakeJob();

    return this.redisService.getHello();
  }

  @UseInterceptors(RedisInterceptor)
  @Get('/after')
  after(): string {
    return this.redisService.getHello();
  }
}
