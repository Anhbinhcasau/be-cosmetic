import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { TokenKeyService } from 'src/auth/tokenKey.service';
import { KeyStore } from 'src/auth/decorator/KeyStore.decorator';
import { UserDecorator } from './Decorator/User.decorator';
import { RefreshToken } from 'src/auth/decorator/RefreshToken.decorator';
import { Types } from 'mongoose';
import { ProductDto } from 'src/product/dto/product.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profileById/:id')
  async findUserById(@Param('id') id) {
    return await this.userService.findByUserId(id);
  }

  @Get('profile')
  async getProfile(@UserDecorator() user) {
    return await this.userService.findByUserId(new Types.ObjectId(user._id));
  }

  @Get('list')
  async listUser() {
    return await this.userService.listUser();
  }

  // @Post('handleRefreshToken')
  // async handleRefreshToken(
  //   @KeyStore() keyStore,
  //   @UserDecorator() user,
  //   @RefreshToken() refreshToken,
  // ) {
  //   return await this.tokenService.handleRefreshToken({
  //     refreshToken,
  //     user,
  //     keyStore,
  //   });
  // }
  @Post('')
  async create(@Body() user: UserDto) {}

  @Post('edit')
  async edit(@Body() user) {
    return await this.userService.changeProfileUser({ user });
  }
  @Post('favorite')
  async updateFavorite(
    @Body() infoUpdate: { userId: string; product: ProductDto },
  ) {
    const { userId, ...product } = infoUpdate;
    // Gọi phương thức để thêm sản phẩm vào danh sách yêu thích của người dùng
    return await this.userService.addFavorite(userId, product);
  }
  @Delete('deletefavorite')
  async deleteFavorite(
    @Body() infoUpdate: { userId: string; product: ProductDto },
  ) {
    const { userId, ...product } = infoUpdate;
    // Gọi phương thức để thêm sản phẩm vào danh sách yêu thích của người dùng
    return await this.userService.removeFavorite(userId, product);
  }
}
