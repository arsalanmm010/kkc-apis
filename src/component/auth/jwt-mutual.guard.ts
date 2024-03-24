import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtMutualAuthGuard extends AuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean {
    const request = context.switchToHttp().getRequest();
    if (request?.user?.role==='SUPER_ADMIN' || request?.user?.role==='ADMIN') {
      return true;
    } else {
      return false;
    }
  }
}
