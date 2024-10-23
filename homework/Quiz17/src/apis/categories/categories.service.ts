import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetailCategory } from './entities/detailCategory.entity';
import { Repository } from 'typeorm';
import { SubCategory } from './entities/subCategory.entity';
import { MainCategory } from './entities/mainCategory.entity';
import { ICategories } from './interface/category.interface';
import { CreateMainCategories } from './dto/categories.dto';

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
    async create({
        createCategoryInput,
    }: ICategories): Promise<CreateMainCategories[]> {
        const [mainCategory, subCategory, detailCategory] =
            createCategoryInput.category;

        const mainCategoryInfo = await this.mainCategoriesRepository.insert({
            category: mainCategory,
        });

        const subCategoryInfo = await this.subCategoriesRepository.insert({
            category: subCategory,
            mainCategoryId: mainCategoryInfo.identifiers[0].id,
        });

        const detailCategoryInfo = await this.detailCategoriesRepository.insert(
            {
                category: detailCategory,
                subCategoryId: subCategoryInfo.identifiers[0].id,
            },
        );
        return [
            {
                id: mainCategoryInfo.identifiers[0].id,
                category: mainCategory,
                subCategory: {
                    id: subCategoryInfo.identifiers[0].id,
                    category: subCategory,
                    detailCategory: {
                        id: detailCategoryInfo.identifiers[0].id,
                        category: detailCategory,
                    },
                },
            },
        ];
        // 배열 속성을 '/' 기준으로 분리하여 테이블에 각각 저장하는 코드
        // 해당 방법으로 저장하면 정규화에 어긋나는 것으로 판단
        // const main: string[] = mainCategory.split('/');
        // const sub: string[] = subCategory.split('/');
        // const detail: string[] = detailCategory.split('/');
        // main.map(async (mainCategory) => {
        //     const mainCategoryId = await this.mainCategoriesRepository.insert({
        //         category: mainCategory,
        //     });
        //     sub.map(async (subCategory) => {
        //         const subCategoryId = await this.subCategoriesRepository.insert(
        //             {
        //                 category: subCategory,
        //                 mainCategoryId: mainCategoryId.identifiers[0].id,
        //             },
        //         );
        //         detail.map((detailCategory) => {
        //             this.detailCategoriesRepository.insert({
        //                 category: detailCategory,
        //                 subCategoryId: subCategoryId.identifiers[0].id,
        //             });
        //         });
        //     });
        // });
    }
}
