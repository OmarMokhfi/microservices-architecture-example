import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
