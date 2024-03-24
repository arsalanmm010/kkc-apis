import { Types } from 'mongoose';

export const generateStringId = () => {
  return new Types.ObjectId().toHexString();
};

export const toDecimals = (
  number: string | number | bigint,
  decimals: number,
) => {
  return Math.floor(Number(number) * Math.pow(10, decimals))?.toString();
};
