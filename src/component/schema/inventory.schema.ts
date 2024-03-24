import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { generateStringId } from 'src/utils/utils';

export type InventoryDocument = HydratedDocument<Inventory>;

@Schema()
export class Inventory {
  @Prop({ type: String, default: generateStringId })
  _id: string;

  @Prop({ type: String, default: '' })
  name: string;

  @Prop({ type: Number, default: 0 })
  amount: number;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);

InventorySchema.set('timestamps', true);

InventorySchema.set('toJSON', {
  transform: function (_, ret, __) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

InventorySchema.set('toObject', {
  transform: function (_, ret, __) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});
