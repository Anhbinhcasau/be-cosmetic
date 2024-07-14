import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CategoryService } from './category.service';


@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  async addCategory(@Body() category: {name: string, logo: string}) {
    return await this.categoryService.create(category);
  }

  @Get()
  async findAllCategory() {
    return await this.categoryService.findAll();
  }

  @Get(':id')
  async findOneCategory(@Param('id') id: string) {
    return await this.categoryService.findOne(id);
  }

  @Put(':id')
  async updateCategory(@Param('id') id: string, @Body() category: { name: string, logo: string}) {
    return await this.categoryService.update(id, category);
  }

  @Delete(':id')
  async removeCategory(@Param('id') id: string) {
    return await this.categoryService.remove(id);
  }
}
