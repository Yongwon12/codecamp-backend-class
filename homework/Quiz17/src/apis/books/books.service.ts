import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import {
    IBooksServiceFindOne,
    ICreateBooksServiceInput,
    IDeleteBooksServiceInput,
    IDeletedBooksRestoreServiceInput,
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
    // 검증로직은 메서드로 작성
    CheckSoldOut({ book }: IUpdateBooksServiceCheckSoldOut): void {
        if (book.isSoldOut) {
            throw new UnprocessableEntityException('품절상태인 상품입니다.');
        }
    }
    async delete({ bookId }: IDeleteBooksServiceInput): Promise<boolean> {
        const deleteBook = await this.booksRepository.softDelete({
            id: bookId,
        });
        return deleteBook.affected ? true : false;
    }
    async findAllWithDeleted(): Promise<Book[]> {
        return await this.booksRepository.find({ withDeleted: true });
    }
    async restore({
        bookId,
    }: IDeletedBooksRestoreServiceInput): Promise<boolean> {
        const isRestore = await this.booksRepository.restore(bookId);
        return isRestore.affected ? true : false;
    }
}
