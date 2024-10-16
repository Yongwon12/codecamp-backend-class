import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.constroller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Product, // Product 테이블에 접근
        ]),
    ],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}
