import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInventoryDTO } from './dto/createInventory.dto';
import { Inventory, InventoryDocument } from '../schema/inventory.schema';
import { CreateBillDTO } from './dto/createBill.dto';
import { Bill, BillDocument } from '../schema/bill.schema';

const message = 'this is signature message for soul';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Inventory.name)
    private readonly _inventoryModel: Model<InventoryDocument>,
    @InjectModel(Bill.name)
    private readonly _billModel: Model<BillDocument>,
  ) {}

  async createInventory(createInventoryDTO: CreateInventoryDTO) {
    try {
      const existingInventory = await this._inventoryModel
        .findOne({ name: createInventoryDTO.name })
        .exec();
      if (existingInventory) {
        throw new BadRequestException(
          'Inventory with this name already exists',
        );
      }
      const newInventory = new this._inventoryModel({
        ...createInventoryDTO,
      });

      await newInventory.save();

      return newInventory;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async editInventory(createInventoryDTO: CreateInventoryDTO, id: string) {
    try {
      const existingInventory = await this._inventoryModel.findById(id);
      if (!existingInventory) {
        throw new BadRequestException('Inventory not found.');
      }

      if (createInventoryDTO.name !== existingInventory.name) {
        const inventoryWithSameName = await this._inventoryModel
          .findOne({ name: createInventoryDTO.name })
          .exec();
        if (inventoryWithSameName) {
          throw new BadRequestException(
            'Another inventory with this name already exists.',
          );
        }
      }
      existingInventory.name = createInventoryDTO.name;
      existingInventory.amount = createInventoryDTO.amount;

      const updatedInventory = await existingInventory.save();

      return updatedInventory;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async deleteInventory(id: string) {
    try {
      const deletedInventory = await this._inventoryModel.findByIdAndDelete(id);
      if (!deletedInventory) {
        throw new BadRequestException('Inventory not found.');
      }
      return { message: 'Invenotory Deleted Successfully!!!' };
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async getInventory() {
    try {
      const getAllTokens = await this._inventoryModel.find();
      return getAllTokens;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async createBill(createBillDTO: CreateBillDTO) {
    try {
      const existingInventory = await this._inventoryModel
        .findOne({ name: createBillDTO.InventoryName })
        .exec();

      if (!existingInventory) {
        throw new NotFoundException('Inventory not found');
      }

      // Check if the requested amount is greater than the available quantity
      if (createBillDTO.amount > existingInventory.amount) {
        throw new BadRequestException(
          'Requested amount exceeds available quantity',
        );
      }

      // Deduct the specified amount from the inventory
      existingInventory.amount -= createBillDTO.amount;
      await existingInventory.save();
      const newBill = new this._billModel({
        ...createBillDTO,
      });

      await newBill.save();
      return newBill;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async getBill() {
    try {
      const getBills = await this._billModel.find();
      return getBills;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }
}
