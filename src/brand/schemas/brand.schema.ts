import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Brand {
  
  @Prop({
    require: true,
    unique: true,
  })
  name: string;

  @Prop({ require: true })
  image: string;

}

export const BrandSChema = SchemaFactory.createForClass(Brand);