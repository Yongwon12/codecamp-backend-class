import { DocumentBuilder } from '@nestjs/swagger';
import { CategoriesDto } from '../dto/categories.dto';

export const createSwaggerConfig = () => {
    return new DocumentBuilder()
        .setTitle('yes24 api')
        .setDescription('yes24 도서 api 입니다.')
        .setBasePath('/apis')
        .setVersion('1.0')
        .addTag('categories')
        .addBearerAuth()
        .build();
};

export const createCategoriesBodyConfig = () => ({
    type: CategoriesDto,
    description: '도서 카테고리',
    required: true,
    examples: {
        example1: {
            summary: '카테고리 등록 API입니다..',
            value: {
                // mainCategory: '소설/시/희곡',
                // subCategory: '한국소설',
                // detailCategory: '한국 장편소설',
                category: ['소설/시/희곡', '한국소설', '한국 장편소설'],
            },
        },
    },
});
