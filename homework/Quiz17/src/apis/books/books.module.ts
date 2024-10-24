import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { DetailCategory } from '../categories/entities/detailCategory.entity';
import { SubCategory } from '../categories/entities/subCategory.entity';
import { MainCategory } from '../categories/entities/mainCategory.entity';
import { AuthorsService } from '../authors/authors.service';
import { Author } from '../authors/entities/author.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Book, //
            DetailCategory,
            SubCategory,
            MainCategory,
            Author,
        ]),
    ],
    controllers: [BooksController],
    providers: [BooksService, AuthorsService],
})
export class BooksModule {}
