import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './apis/books/books.module';
import { CateogoriesModule } from './apis/categories/categories.module';

@Module({
    imports: [
        // UsersModule,
        BooksModule,
        CateogoriesModule,
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: process.env.DATABASE_TYPE as 'mysql',
            host: process.env.DATABASE_HOST,
            port: Number(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_DATABASE,
            entities: [__dirname + '/apis/**/*.entity.*'],
            logging: true,
            synchronize: true,
            // type: 'mysql',
            // host: 'localhost',
            // port: 3306,
            // username: 'root',
            // password: 'D08yw14k.',
            // database: 'myproject',
            // entities: [Board],
            // logging: true,
            // synchronize: true,
        }),
    ],
})
export class AppModule {}