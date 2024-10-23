import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainCategory } from './entities/mainCategory.entity';
import { SubCategory } from './entities/subCategory.entity';
import { DetailCategory } from './entities/detailCategory.entity';
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
