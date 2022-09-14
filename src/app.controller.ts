import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { QueueHandlerInterceptor } from './queue-handler.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/blocking-5ms')
  async blocking5ms(): Promise<string> {
    await this.appService.queueFake(5);

    return this.appService.getHello();
  }

  @Get('/blocking-25ms')
  async blocking25ms(): Promise<string> {
    await this.appService.queueFake(25);

    return this.appService.getHello();
  }

  @UseInterceptors(QueueHandlerInterceptor)
  @Get('/non-blocking-5ms')
  nonBlocking5ms(): string {
    return this.appService.getHello();
  }

  @UseInterceptors(QueueHandlerInterceptor)
  @Get('/non-blocking-25ms')
  nonBlocking25ms(): string {
    return this.appService.getHello();
  }
}
