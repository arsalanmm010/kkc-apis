import { ApiProperty } from '@nestjs/swagger';

export class CreateBillDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  InventoryName: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  total: number;
}
