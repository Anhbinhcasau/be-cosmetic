import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { VoucherDto, VoucherUseDto } from './dto/d';

@Controller('voucher')
export class VoucherController {
    constructor(private voucherService: VoucherService) {}

    @Post('create')
    async newVoucher(@Body() voucher) {
        // console.log(voucher);
        return await this.voucherService.newVoucher(voucher)
    }

    @Post('useVoucher')
    async useVoucher (@Body() voucher: VoucherUseDto) {
        return await this.voucherService.useVoucher(voucher);
    }

    @Get('list')
    async voucherList () {
        return await this.voucherService.voucherList()
    }

    @Delete('remove/:id')
    async remove(@Param('id') id: string) {
        try {
            await this.voucherService.removeVoucherById(id);
            return { message: 'Voucher deleted successfully' };
        } catch (error) {
            return { error: error.message };
        }
    }

    @Put('edit/:id')
    async edit(@Param('id') id: string, @Body() voucherDto: VoucherDto) {
        try {
            const editedVoucher = await this.voucherService.editVoucher(id, voucherDto);
            return { voucher: editedVoucher };
        } catch (error) {
            return { error: error.message };
        }
    }

    @Post('applyVoucher')
    async applyVoucher(@Body() voucher){
        return await this.voucherService.findVoucherByVoucherName(voucher.voucherName);
    }
}
