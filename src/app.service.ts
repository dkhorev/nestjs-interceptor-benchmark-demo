import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async queueFake(): Promise<void> {
    await this.delay(25);
  }

  delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
}
