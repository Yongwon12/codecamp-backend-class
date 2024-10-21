import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import {
    IBooksServiceFindOne,
    ICreateBooksServiceInput,
    IUpdateBooksServiceCheckSoldOut,
    IUpdateBooksServiceInput,
} from './interface/books-service.interface';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private readonly booksRepository: Repository<Book>, //
    ) {}
    async findAll(): Promise<Book[]> {
        return await this.booksRepository.find();
    }
    async findOne({ bookId }: IBooksServiceFindOne): Promise<Book> {
        return await this.booksRepository.findOne({ where: { id: bookId } });
    }
    async create({ createBookInput }: ICreateBooksServiceInput): Promise<Book> {
        return await this.booksRepository.save(createBookInput);
    }
    async update({
        bookId,
        updateBookInput,
    }: IUpdateBooksServiceInput): Promise<Book> {
        const book = await this.findOne({ bookId });

        this.CheckSoldOut({ book });
        return await this.booksRepository.save({
            ...book, //
            ...updateBookInput,
        });
    }
    CheckSoldOut({ book }: IUpdateBooksServiceCheckSoldOut): void {
        if (book.isSoldOut) {
            throw new UnprocessableEntityException('품절상태인 상품입니다.');
        }
    }
}
