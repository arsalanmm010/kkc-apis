import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Res,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateInventoryDTO } from './dto/createInventory.dto';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateBillDTO } from './dto/createBill.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('createInventory')
  async createInventory(@Body() createInventoryDTO: CreateInventoryDTO) {
    return await this.authService.createInventory(createInventoryDTO);
  }

  @Post('editInventory/:id')
  async editInventory(
    @Body() createInventoryDTO: CreateInventoryDTO,
    @Param('id') id: string,
  ) {
    return await this.authService.editInventory(createInventoryDTO, id);
  }

  @Post('deleteInventory/:id')
  async deleteInventory(@Param('id') id: string) {
    return await this.authService.deleteInventory(id);
  }

  @Get('getInventory')
  async getInventory() {
    return await this.authService.getInventory();
  }

  @Post('createBill')
  async createBill(@Body() createBillDTO: CreateBillDTO) {
    return await this.authService.createBill(createBillDTO);
  }

  @Get('getBill')
  async getBill() {
    return await this.authService.getBill();
  }
}
