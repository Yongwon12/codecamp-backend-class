import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { ProductTag } from './entities/productTag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
    IProductsTagsServiceBulkInsert,
    IProductsTagsServiceBulkUpdate,
    IProductsTagsServiceFindByNames,
} from './interfaces/products-tags-service.interface';

@Injectable()
export class ProductsTagsService {
    constructor(
        @InjectRepository(ProductTag)
        private readonly productsTagsRepository: Repository<ProductTag>,
    ) {}
    // db에서 동일한 tagNames가 있는지 확인해서 가져오는 로직
    findByNames({ tagNames }: IProductsTagsServiceFindByNames) {
        return this.productsTagsRepository.find({
            where: { name: In(tagNames) },
        });
    }

    bulkInsert({ names }: IProductsTagsServiceBulkInsert) {
        return this.productsTagsRepository.insert(names);
    }
}
