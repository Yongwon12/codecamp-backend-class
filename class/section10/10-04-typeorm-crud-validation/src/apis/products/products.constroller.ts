import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductInput } from './dto/create-product.input';
import {
    ApiBearerAuth,
    ApiBody,
    ApiOperation,
    ApiQuery,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { Product } from './entities/product.entity';
import {
    createProductsBodyConfig,
    getProductBodyConfig,
    getProductsBodyConfig,
} from './swagger/swagger';

@ApiBearerAuth()
@ApiTags('products')
@Controller()
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService, //
    ) {}
    @ApiOperation({ summary: 'Get Products' })
    @ApiResponse({
        status: 200, //
        description: 'The found record', //
    })
    @ApiQuery(getProductsBodyConfig())
    @Get('/products')
    fetchProducts(): Promise<Product[]> {
        return this.productsService.findAll();
    }
    @ApiOperation({ summary: 'Get Product' })
    @ApiResponse({
        status: 200, //
        description: 'The found record', //
    })
    @ApiQuery(getProductBodyConfig())
    @Get('/product')
    fetchProduct(@Query('id') productId: string): Promise<Product> {
        return this.productsService.findOne({ productId });
    }
    @ApiOperation({ summary: 'Create Products' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiBody(createProductsBodyConfig())
    @Post('/product')
    createProduct(
        @Body() createProductInput: CreateProductInput,
    ): Promise<Product> {
        // << 브라우저에 결과 보내주는 2가지 방법 >>
        // 1. 등록된 내용이 담긴 객체를 그대로 브라우저에 돌려보내주기
        return this.productsService.create({ createProductInput });
        // 2. 결과메세지만 간단히 보내주기
        // return '정상적으로 상품이 등록되었습니다.';
    }
}