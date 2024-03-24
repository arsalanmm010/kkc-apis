import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtServerAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    console.log('server auth guard', request.user);

    // Assuming 'server' is a valid user role
    if (request.user && request.user.role === 'server') {
      return true;
    } else {
      return false;
    }
  }
}
