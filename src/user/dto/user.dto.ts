import { IsNotEmpty, Length, IsString, IsEmail, IsBoolean, IsArray, ArrayNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer'; 
import { Roles } from 'src/constants';
import { ProductDto } from 'src/product/dto/product.dto';

export class UserDto {
  @IsNotEmpty()
  @Length(4, 30)
  @IsString()
  userName: string;

  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsBoolean()
  active: boolean;

  @IsNotEmpty()
  @IsString()
  role: String;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  favorite: ProductDto[];
}
