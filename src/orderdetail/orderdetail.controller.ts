import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDecorator } from 'src/user/Decorator/User.decorator';
import { OrderdetailService } from './orderdetail.service';
import { StatusOrderEnum } from 'src/constants/index';

@Controller('orderDetail')
export class OrderdetailController {
  constructor(private orderDetailService: OrderdetailService) {}

  @Get('getAll/:userId')
  async orderHistory(@Param('userId') userId) {
    return this.orderDetailService.findOrderHistoryByUserId({ userId });
  }

  @Get('getAll')
  async getAllOrderHistory() {
    return await this.orderDetailService.findAllOrderHistory();
  }

  @Get(':orderId')
  async findOrderDetail(@Param('orderId') orderId) {
    return await this.orderDetailService.findOrderDetailById({ orderId });
  }

  @Post('completed')
  async completedOrderDetail(@UserDecorator() user, @Body() orderDetail) {
    return await this.orderDetailService.changeStatusOrderDetail({
      userId: orderDetail.userId,
      orderDetailId: orderDetail._id,
      status: StatusOrderEnum.COMPLETED,
    });
  }

  @Post('delivering')
  async devliveryOrderDetail(@UserDecorator() user, @Body() orderDetail) {
    return await this.orderDetailService.changeStatusOrderDetail({
      userId: orderDetail.userId,
      orderDetailId: orderDetail._id,
      status: StatusOrderEnum.DELIVERING,
    });
  }

  @Post('cancel')
  async cancelOrderDetail(@UserDecorator() user, @Body() orderDetail) {
    return await this.orderDetailService.changeStatusOrderDetail({
      userId: orderDetail.userId,
      orderDetailId: orderDetail._id,
      status: StatusOrderEnum.CANCELED,
    });
  }
}
