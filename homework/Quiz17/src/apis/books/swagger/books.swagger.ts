import { DocumentBuilder } from '@nestjs/swagger';
import { CreateBookInput, UpdateBookInput } from '../dto/book.dto';

export const createSwaggerConfig = () => {
    return new DocumentBuilder()
        .setTitle('yes24 api')
        .setDescription('yes24 도서 api 입니다.')
        .setBasePath('/apis')
        .setVersion('1.0')
        .addTag('books')
        .addBearerAuth()
        .build();
};

export const createBooksBodyConfig = () => ({
    type: CreateBookInput,
    description: '도서',
    required: true,
    examples: {
        example1: {
            summary: '도서 등록 API입니다..',
            value: {
                name: '소년이 온다.',
                desc: '말라파르테 문학상, 만해문학상 수상작',
                price: 13500,
                publicAt: '2014-05-19',
                transBook: 'Human Acts',
                publish: '창비',
            },
        },
    },
});

export const updateBooksBodyConfig = () => ({
    type: UpdateBookInput,
    description: '도서',
    required: true,
    examples: {
        example1: {
            summary: '도서 정보수정 API입니다..',
            value: {
                name: '소년이 온다.',
                desc: '말라파르테 문학상, 만해문학상 수상작',
                price: 13500,
                publicAt: '2014-05-20',
                publish: '창비',
                transBook: 'Human Acts',
            },
        },
    },
});
