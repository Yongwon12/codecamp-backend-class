import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';

import { createSwaggerConfig } from './apis/products/swagger/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const options = createSwaggerConfig();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('apis', app, document);
    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
