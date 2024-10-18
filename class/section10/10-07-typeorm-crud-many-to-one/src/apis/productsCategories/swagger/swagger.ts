import { DocumentBuilder } from '@nestjs/swagger';

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
