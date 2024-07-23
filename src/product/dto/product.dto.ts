import {
  IsArray,
  IsBase64,
  IsEmpty,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { AttributeDto } from './attributes.tdo';
import { Types } from 'mongoose';
import { CommentDto } from './comments.dto';

export class ProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  quantity_sold: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  material: string;

  @IsNotEmpty()
  @Type(() => AttributeDto)
  @ValidateNested({ each: true })
  @IsArray()
  attributes: AttributeDto[];

  @IsNotEmpty()
  main_image: ArrayBuffer[];
  
  @IsNotEmpty()
  @Type(() => CommentDto)
  @ValidateNested({ each: true })
  @IsArray()
  comment: CommentDto[];

  @IsString()
  brand: string;

  @IsString()
  category: string;

  @IsNumber()
  price: number;
}

export class ProductToCartDto extends AttributeDto {
  @IsMongoId()
  @IsNotEmpty()
  userId: Types.ObjectId;

  @IsNotEmpty()
  @IsString()
  name: string;
}
