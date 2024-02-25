import { HttpService } from '@nestjs/axios';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async getUser(token: string): Promise<any> {
    // Send the token to the auth microservice through HTTP
    const { data } = await firstValueFrom(
      this.httpService
        .get('http://localhost:3001/auth', {
          headers: {
            Authorization: token,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw new UnauthorizedException();
          }),
        ),
    );
    return data;
  }
}
