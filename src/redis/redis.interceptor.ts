import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { RedisService } from './redis.service';

@Injectable()
export class RedisInterceptor implements NestInterceptor {
  constructor(private readonly service: RedisService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap(async () => {
        await this.service.queueFakeJob();
      }),
    );
  }
}
