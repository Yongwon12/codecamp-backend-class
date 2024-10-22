import {
    Body,
    Controller,
    Delete,
    Get,
    Patch,
    Post,
    Put,
    Query,
} from '@nestjs/common';
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
    @Post('/book')
    createBook(@Body() createBookInput: CreateBookInput): Promise<Book> {
        return this.booksService.create({ createBookInput });
    }
    @ApiBody(updateBooksBodyConfig())
    @ApiTags('도서정보수정')
    @Put('/book')
    updateBook(
        @Query('id') bookId: string, //
        @Body() updateBookInput: UpdateBookInput,
    ): Promise<Book> {
        return this.booksService.update({ bookId, updateBookInput });
    }
    @ApiTags('도서 삭제')
    @Delete('/book')
    deleteBook(
        @Query('id') bookId: string, //
    ): Promise<boolean> {
        return this.booksService.delete({ bookId });
    }

    @ApiTags('모든 도서 조회(삭제된 data포함)')
    @Get('/books-with-deleted')
    fetchBooksWithDeleted(): Promise<Book[]> {
        return this.booksService.findAllWithDeleted();
    }

    @ApiTags('삭제된 도서 복구')
    @Patch('/books-restore')
    restoreBook(
        @Query('id') bookId: string, //
    ): Promise<boolean> {
        return this.booksService.restore({ bookId });
    }
}
