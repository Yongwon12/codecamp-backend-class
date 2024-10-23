import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { createCategoriesBodyConfig } from './swagger/categories.swagger';
import { MainCategory } from './entities/mainCategory.entity';
import { DetailCategory } from './entities/detailCategory.entity';
import { CategoriesService } from './categories.service';
import { CategoriesDto, CreateMainCategories } from './dto/categories.dto';
import { SubCategory } from './entities/subCategory.entity';

@Controller()
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @ApiTags('카테고리 등록')
    @ApiBody(createCategoriesBodyConfig())
    @Post('/categories')
    createCategories(
        @Body() createCategoryInput: CategoriesDto,
    ): Promise<CreateMainCategories[]> {
        return this.categoriesService.create({ createCategoryInput });
    }
}
