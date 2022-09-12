import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/before')
  async before(): Promise<string> {
    await this.appService.queueFake();

    return this.appService.getHello();
  }

  @Get('/after')
  after(): string {
    return this.appService.getHello();
  }
}
