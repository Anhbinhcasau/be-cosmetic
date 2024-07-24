import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { formattedPrice } from 'src/utils/formatPrice';
import { checkoutTemplate } from './templates/checkout.template';
import { CheckoutDto } from 'src/checkout/dto/checkout.dto';

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_EMAIL, // replace with your Gmail email
      pass: process.env.PASSWORD_EMAIL,
    },
  });

  async sendOrderConfirmationEmail(infoCheckout: CheckoutDto) {
    const mailOptions = {
      from: process.env.USER_EMAIL,
      to: infoCheckout.email,
      subject: 'Xác nhận đơn hàng',
      text: `Cảm ơn bạn đã đặt hàng! Đơn hàng của bạn đã được xác nhận.`,
      html: `<h1>Xác nhận đơn hàng</h1>
             <p>Cảm ơn bạn đã đặt hàng!</p>
             <p>Chi tiết đơn hàng:</p>
             <p>Họ tên: ${infoCheckout.full_name}</p>
             <p>Địa chỉ: ${infoCheckout.address}</p>
             <p>Tổng giá: ${infoCheckout.total_price}</p>`,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Internal Server Error');
    }
  }
}
