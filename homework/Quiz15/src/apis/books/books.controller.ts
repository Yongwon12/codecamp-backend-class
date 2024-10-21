import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateBookInput, UpdateBookInput } from './dto/book.dto';
import {
    createBooksBodyConfig,
    updateBooksBodyConfig,
} from './swagger/books.swagger';

@Controller()
export class BooksController {
    constructor(private readonly booksService: BooksService) {}
    @ApiOperation({ summary: 'Get Books' })
    @ApiTags('전체도서조회')
    @Get('/books')
    fetchBooks(): Promise<Book[]> {
        return this.booksService.findAll();
    }
    @ApiOperation({ summary: 'Get Book' })
    @ApiTags('특정도서조회')
    @Get('/book')
    fetchBook(@Query('id') bookId: string): Promise<Book> {
        return this.booksService.findOne({ bookId });
    }
    @ApiBody(createBooksBodyConfig())
    @ApiTags('도서등록')
    @Post('/books')
    createBook(@Body() createBookInput: CreateBookInput) {
        return this.booksService.create({ createBookInput });
    }
    @ApiBody(updateBooksBodyConfig())
    @ApiTags('도서정보수정')
    @Put('/books')
    updateBook(
        @Query('id') bookId: string, //
        @Body() updateBookInput: UpdateBookInput,
    ) {
        return this.booksService.update({ bookId, updateBookInput });
    }
}
