import { PickType } from '@nestjs/swagger';
import { ProductTag } from '../entities/productTag.entity';

export class ProductTagsUpdate extends PickType(ProductTag, ['name']) {}
