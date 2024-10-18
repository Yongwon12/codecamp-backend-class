import { DocumentBuilder } from '@nestjs/swagger';
import {
    CreateProductInput,
    GetProduct,
    UpdateProductInput,
} from '../dto/product.dto';

export const createSwaggerConfig = () => {
    return new DocumentBuilder()
        .setTitle('나만의 api')
        .setDescription('나만의 api 입니다.')
        .setBasePath('/apis')
        .setVersion('1.0')
        .addTag('products')
        .addBearerAuth()
        .build();
};

export const createProductsBodyConfig = () => ({
    type: CreateProductInput,
    description: '상품',
    required: true,
    examples: {
        example1: {
            summary: '상품 등록하기 API입니다..',
            value: {
                name: '맛동산',
                description: '맛좋은 맛동산 과자 판매합니다',
                price: 3000,
                productSalesLocation: {
                    address: '구로',
                    addressDetail: '구로역',
                    lat: 10.2,
                    lng: 20.2,
                    meetingTime: '2024-10-18',
                },
                productCategoryId: '1dc870fc-cc43-4e51-9c10-1b4774ded457',
            },
        },
    },
});

export const updateProductBodyConfig = () => ({
    type: UpdateProductInput,
    description: '상품',
    required: true,
    examples: {
        example1: {
            summary: '상품 수정하기 API입니다..',
            value: {
                name: '맛동산',
                description: '맛좋은 맛동산 과자 판매합니다',
                price: 3000,
            },
        },
    },
});
