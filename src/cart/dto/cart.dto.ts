import {
  IsArray,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';

export class CartDto {
  @IsNotEmpty()
  @IsMongoId()
  user: Types.ObjectId;

  @IsArray()
  items_cart: [];

  @IsNumber()
  @IsPositive()
  count_item_cart: number;

  @IsNumber()
  @IsPositive()
  total_price_cart: number;
}

export class ItemToCartDto {
  @IsMongoId()
  @IsNotEmpty()
  productId: Types.ObjectId;

  //Id Item in attributes
  id?: Number;

  @IsNotEmpty()
  userId: Types.ObjectId | string;

  @IsNotEmpty()
  @IsString()
  type_product: string;

  @IsNotEmpty()
  @IsInt()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @IsNotEmpty()
  @IsString()
  image: string;
}

export class DeleteItemDto {
  @IsNotEmpty()
  @IsMongoId()
  userId: Types.ObjectId;

  @IsNotEmpty()
  @IsMongoId()
  cartId: Types.ObjectId;

  @IsNotEmpty()
  @IsMongoId()
  productId: Types.ObjectId;

  @IsOptional() // Make id optional if it's not always req
  @IsInt()
  id?: number;
}
