import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auto, AutoDocument } from '../database/schemas/auto.schema';

@Injectable()
export class AutoRepository {
  constructor(@InjectModel(Auto.name) private autoModel: Model<AutoDocument>) {}

  async findAll(): Promise<Auto[]> {
    return this.autoModel.find().lean();
  }
}
