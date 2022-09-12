import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { AppService } from './app.service';

@Injectable()
export class QueueHandlerInterceptor implements NestInterceptor {
  constructor(private readonly appService: AppService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap(async () => {
        await this.appService.queueFake();
      }),
    );
  }
}
