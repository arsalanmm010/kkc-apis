import { Module, DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { Inventory, InventorySchema } from '../schema/inventory.schema';
import { Bill, BillSchema } from '../schema/bill.schema';

@Module({})
export class AuthModule {
  static forRoot(): DynamicModule {
    return {
      imports: [
        MongooseModule.forFeature([
          { name: Inventory.name, schema: InventorySchema },
          { name: Bill.name, schema: BillSchema },
        ]),

        // JwtModule.register({
        //   secret: process.env.JWT_SECRET,
        //   signOptions: { expiresIn: '9999999999s' },
        // }),
      ],

      controllers: [AuthController],
      providers: [AuthService, JwtStrategy],
      module: AuthModule,
    };
  }
}
