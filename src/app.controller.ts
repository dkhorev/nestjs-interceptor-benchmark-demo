import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { QueueHandlerInterceptor } from './queue-handler.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/before')
  async before(): Promise<string> {
    await this.appService.queueFake();

    return this.appService.getHello();
  }

  @UseInterceptors(QueueHandlerInterceptor)
  @Get('/after')
  after(): string {
    return this.appService.getHello();
  }
}
