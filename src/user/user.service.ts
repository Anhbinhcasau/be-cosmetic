import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Error, Model, Types } from 'mongoose';
import { ProductDto } from 'src/product/dto/product.dto';
import { Product } from 'src/product/schemas/product.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findByUsername(
    userName,
    select = {
      userName: 1,
      password: 1,
      roles: 1,
    },
  ) {
    return await this.userModel.findOne({ userName }).select(select);
  }

  async findByUserId(userId) {
    return await this.userModel.findById(userId);
  }

  async changeProfileUser({ user }) {
    const foundUser = await this.userModel.findById(user._id);
    if (!foundUser) throw new ForbiddenException('Không tìm thấy user');
    const filter = { _id: new Types.ObjectId(user._id) },
      newUpdate = { ...user, _id: new Types.ObjectId(user._id) },
      option = { upsert: true, new: true };

    return await this.userModel.findByIdAndUpdate(filter, newUpdate, option);
  }

  async listUser() {
    return await this.userModel.find().exec();
  }
  async addFavorite(userId, product) {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Cập nhật danh sách yêu thích của người dùng
    const filter = { _id: userId };
    const update = {
      $push: {
        favorite: { ...product },
      },
    };
    const options = { new: true, upsert: true };

    return await this.userModel.findByIdAndUpdate(filter, update, options);
  }
  async removeFavorite(userId, product) {
    console.log(
      `Attempting to remove product: ${JSON.stringify(
        product,
      )} from user: ${userId}`,
    );

    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    console.log('Current user favorites:', user.favorite);

    // Cập nhật danh sách yêu thích của người dùng
    const filter = { _id: userId };
    const update = {
      $pull: {
        favorite: { _id: product._id }, // Sử dụng _id để xóa sản phẩm
      },
    };
    const options = { new: true };

    const result = await this.userModel.updateOne(filter, update, options);

    return result;
  }
}
