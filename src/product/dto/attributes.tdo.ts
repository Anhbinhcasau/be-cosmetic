import {
  IsEmpty,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class AttributeDto {
  // @Is()
  id?: Number;

  @IsNotEmpty()
  @IsString()
  type_product: string;


  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  quantity: number;


  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;

  // @IsString()
  image: Buffer;
}
