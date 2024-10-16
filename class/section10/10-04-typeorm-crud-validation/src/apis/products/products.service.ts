import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
    IProductsServiceCreate,
    IProductsServiceFindOne,
} from './interfaces/products-service.interface';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productsRepository: Repository<Product>, //
    ) {}
    create({ createProductInput }: IProductsServiceCreate): Promise<Product> {
        const result = this.productsRepository.save({
            ...createProductInput,
            // 하나 하나 직접 나열하는 방식 (하드코딩)
            // name: '마우스',
            // description: '좋은 마우스요',
            // price: 3000,
        });
        // result안에는 무엇이 담겨있을까
        // result = {
        // id: 'uuid가 담겨있을것',
        // name: "마우스",
        // description: "좋은 마우스",
        // price: 3000
        // }
        return result;
    }
    findAll(): Promise<Product[]> {
        return this.productsRepository.find();
    }
    findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
        return this.productsRepository.findOne({ where: { id: productId } });
    }
}
