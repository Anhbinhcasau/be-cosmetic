import { Injectable } from '@nestjs/common';
import { Category } from './schemas/category.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
) {}

  async create({name, logo}) {
    return await this.categoryModel.create({name, logo});
  }

  async findAll() {
    return await this.categoryModel.find().exec();
  }

  async findOne(id: string) {
    return await this.categoryModel.findById(id).exec();
  }

  async update(id: string, {name, logo}) {
    return await this.categoryModel.findByIdAndUpdate(id, { name, logo }, { new: true }).exec();
  }

  async remove(id: string) {
    return await this.categoryModel.findByIdAndRemove(id).exec();
  }
}
