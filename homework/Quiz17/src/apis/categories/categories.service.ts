import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetailCategory } from './entities/detail-category.entity';
import { Repository } from 'typeorm';
import { SubCategory } from './entities/sub-category.entity';
import { MainCategory } from './entities/main-category.entity';
import { ICategories, IDetailCategory } from './interface/category.interface';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(DetailCategory)
        private readonly detailCategoriesRepository: Repository<DetailCategory>,
        @InjectRepository(SubCategory)
        private readonly subCategoriesRepository: Repository<SubCategory>,
        @InjectRepository(MainCategory)
        private readonly mainCategoriesRepository: Repository<MainCategory>,
    ) {}
    async create({ createCategoryInput }: ICategories): Promise<void> {}
}
