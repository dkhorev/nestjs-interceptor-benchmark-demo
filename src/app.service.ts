import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async queueFake(time: number): Promise<void> {
    await this.delay(time);
  }

  delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
}
