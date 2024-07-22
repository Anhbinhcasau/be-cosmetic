import {
  MiddlewareConsumer,
  Module,
  NestModule,
  ValidationPipe,
} from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ProductModule } from './product/product.module';
import { BrandModule } from './brand/brand.module';
import { CartModule } from './cart/cart.module';
import { CheckoutModule } from './checkout/checkout.module';
import { OrderHistoryModule } from './order-history/order-history.module';
//import { AuthMiddleware } from './middlewares/auth.middleware';
import { OrderdetailController } from './orderdetail/orderdetail.controller';
import { OrderdetailModule } from './orderdetail/orderdetail.module';
import { VoucherModule } from './voucher/voucher.module';
import { EmailService } from './email/email.service';
import { ChatgptModule } from './chatgpt/chatgpt.module';
import { SearchModule } from './search/search.module';
import { CategoryModule } from './category/category.module';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(process.env.DB_URI),
    AuthModule,
    UserModule,
    ProductModule,
    CategoryModule,
    BrandModule,
    CheckoutModule,
    CartModule,
    OrderHistoryModule,
    OrderdetailModule,
    VoucherModule,
    ChatgptModule,
    SearchModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    EmailService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .exclude('auth')
      .forRoutes('user', 'cart', 'orderdetail');
  }
}
