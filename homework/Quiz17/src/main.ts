import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';

import { createSwaggerConfig } from './apis/books/swagger/books.swagger';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './commons/filter/http-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // 해당 파이프를 통해 통과한 (validation 성공한..) request만 통과
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new HttpExceptionFilter());
    const options = createSwaggerConfig();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('apis', app, document);
    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
