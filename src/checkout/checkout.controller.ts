import { Body, Controller, Post } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutDto } from './dto/checkout.dto';

@Controller('checkout')
export class CheckoutController {
  constructor(private checkoutService: CheckoutService) {}

  @Post()
  async checkoutCart(@Body() infoCheckout: CheckoutDto) {
    return await this.checkoutService.execute(infoCheckout);
  }

  @Post('send_email')
  async sendOrderConfirmationEmail(@Body() checkoutDto: CheckoutDto) {
    await this.checkoutService.reviewCheckout(checkoutDto);
    return { message: 'Email sent successfully' };
  }
}
