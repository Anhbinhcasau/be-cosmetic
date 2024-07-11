import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Category {
  
  @Prop({
    require: true,
    unique: true,
  })
  name: string;

  @Prop({ require: true })
  logo: string;

}

export const CategorySchema = SchemaFactory.createForClass(Category);