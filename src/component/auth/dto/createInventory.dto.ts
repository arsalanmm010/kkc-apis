import { ApiProperty } from '@nestjs/swagger';

export class CreateInventoryDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  amount: number;
}
