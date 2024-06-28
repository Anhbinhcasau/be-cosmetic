import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'src/product/schemas/product.schema';
import { Model } from 'mongoose';
import { ISearchStrategy } from './search.strategy';

@Injectable()
export class PriceSearchStrategy implements ISearchStrategy {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  search(keyword: string): any {
    return this.productModel
    .find({
        price: { $eq: parseFloat(keyword) }
    })
    .exec();
  }
}