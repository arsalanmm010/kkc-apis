import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAdminAuthGuard extends AuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean {
    const request = context.switchToHttp().getRequest();
    console.log("admin auth gaurd",request.user)

    if (request.user && request.user.role==='ADMIN') {
      return true;
    } else {
      return false;
    }
  }
}
