import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductsCategoriesController } from './productsCategories.controller';
import { ProductsCategoriesService } from './productsCategories.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ProductCategory, //
        ]),
    ],
    controllers: [ProductsCategoriesController],
    providers: [
        ProductsCategoriesService, //
    ],
})
export class ProductsCategoriesModule {}
