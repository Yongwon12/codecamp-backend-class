import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { DetailCategory } from '../categories/entities/detailCategory.entity';
import { SubCategory } from '../categories/entities/subCategory.entity';
import { MainCategory } from '../categories/entities/mainCategory.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Book, //
            DetailCategory,
            SubCategory,
            MainCategory,
        ]),
    ],
    controllers: [BooksController],
    providers: [BooksService],
})
export class BooksModule {}
