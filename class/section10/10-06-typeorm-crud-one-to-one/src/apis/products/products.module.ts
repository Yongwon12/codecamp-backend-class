import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductSalesLocation } from '../productsSalesLocations/entities/productSalesLocation.entity';
import { ProductsSalesLocationsService } from '../productsSalesLocations/proudctsSalesLocations.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Product, // Product 테이블에 접근
            ProductSalesLocation,
        ]),
    ],
    controllers: [ProductsController],
    providers: [
        ProductsService, //
        ProductsSalesLocationsService,
    ],
})
export class ProductsModule {}