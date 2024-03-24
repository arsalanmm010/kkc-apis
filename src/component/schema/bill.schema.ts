import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { generateStringId } from 'src/utils/utils';

export type BillDocument = HydratedDocument<Bill>;

@Schema()
export class Bill {
  @Prop({ type: String, default: generateStringId })
  _id: string;

  @Prop({ type: String, default: '' })
  name: string;

  @Prop({ type: String, default: '' })
  InventoryName: string;

  @Prop({ type: Number, default: 0 })
  amount: number;

  @Prop({ type: Number, default: 0 })
  price: number;

  @Prop({ type: Number, default: 0 })
  total: number;
}

export const BillSchema = SchemaFactory.createForClass(Bill);

BillSchema.set('timestamps', true);

BillSchema.set('toJSON', {
  transform: function (_, ret, __) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

BillSchema.set('toObject', {
  transform: function (_, ret, __) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});
