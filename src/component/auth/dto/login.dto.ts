import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {

  @ApiProperty()
  address: string;

  @ApiProperty()
  signature: string;
}