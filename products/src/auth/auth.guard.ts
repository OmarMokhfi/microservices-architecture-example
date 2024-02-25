import { HttpService } from '@nestjs/axios';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // get the bearer token from headers
    const token = request.headers.authorization;
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      // Using token to get the user id from the auth microservice
      const user_id = await this.authService.getUser(token);
      // Passing the id to the next request handler
      request['user'] = user_id;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }
}
