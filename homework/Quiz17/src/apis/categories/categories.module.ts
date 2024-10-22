import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainCategory } from './entities/main-category.entity';
import { SubCategory } from './entities/sub-category.entity';
import { DetailCategory } from './entities/detail-category.entity';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            MainCategory, //
            SubCategory,
            DetailCategory,
        ]),
    ],
    controllers: [CategoriesController],
    providers: [CategoriesService],
})
export class CateogoriesModule {}
