import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard)
  getProducts(@Request() request): string {
    // Use the user id that we get from the AuthGuard to fetch the products
    return this.appService.getProducts(request.user);
  }
}
