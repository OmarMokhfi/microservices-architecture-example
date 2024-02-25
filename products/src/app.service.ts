import { Injectable } from '@nestjs/common';
import { getUserProducts } from 'helpers/products';

@Injectable()
export class AppService {
  getProducts(user_id: string): any {
    return getUserProducts(user_id);
  }
}
