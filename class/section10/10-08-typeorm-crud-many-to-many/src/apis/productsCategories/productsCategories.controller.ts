import { ProductCategory } from './entities/productCategory.entity';
import { ProductsCategoriesService } from './productsCategories.service';
import { Controller, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('productsCategories')
@Controller()
export class ProductsCategoriesController {
    constructor(
        private readonly productsCategoriesService: ProductsCategoriesService, //
    ) {}

    @ApiOperation({ summary: 'Create ProductsCategory' })
    @Post('/category')
    createProductCategory(
        @Query('name') name: string, //
    ): Promise<ProductCategory> {
        return this.productsCategoriesService.create({ name });
    }
}
