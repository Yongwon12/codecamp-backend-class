import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { createCategoriesBodyConfig } from './swagger/categories.swagger';
import { MainCategory } from './entities/main-category.entity';
import { DetailCategory } from './entities/detail-category.entity';
import { CategoriesService } from './categories.service';
import { CategoriesDto } from './dto/categories.dto';
import { SubCategory } from './entities/sub-category.entity';

@Controller()
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @ApiTags('카테고리 등록')
    @ApiBody(createCategoriesBodyConfig())
    @Post('/categories')
    createCategories(@Body() createCategoryInput: CategoriesDto): Promise<{
        mainCategories: MainCategory[];
        subCategories: SubCategory[];
        detailCategories: DetailCategory[];
    }> {
        return this.categoriesService.create({ createCategoryInput });
    }
}
