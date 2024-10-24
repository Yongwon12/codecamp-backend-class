import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { AutoEncryptionLoggerLevel, Repository } from 'typeorm';
import {
    IBooksServiceFindOne,
    ICreateBooksServiceInput,
    IDeleteBooksServiceInput,
    IDeletedBooksRestoreServiceInput,
    IUpdateBooksServiceCheckSoldOut,
    IUpdateBooksServiceInput,
} from './interface/books-service.interface';
import { AuthorsService } from '../authors/authors.service';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private readonly booksRepository: Repository<Book>, //
        private readonly authorsService: AuthorsService,
    ) {}

    async findAll(): Promise<Book[]> {
        return await this.booksRepository.find({
            relations: [
                'detailCategoryId.subCategoryId.mainCategoryId', //
                'detailCategoryId.subCategoryId',
                'detailCategoryId',
                'authors',
            ],
        });
    }

    async findOne({ bookId }: IBooksServiceFindOne): Promise<Book> {
        return await this.booksRepository.findOne({
            where: { id: bookId },
            relations: [
                'detailCategoryId.subCategoryId.mainCategoryId', //
                'detailCategoryId.subCategoryId',
                'detailCategoryId',
                'authors',
            ],
        });
    }
    async create({ createBookInput }: ICreateBooksServiceInput): Promise<Book> {
        const { authors, detailCategoryId, ...createBookInputExcluded } =
            createBookInput;

        const temp = [];
        authors.forEach((author) => {
            temp.push({ author });
        });

        const bookAuthors = await this.authorsService.create({ authors: temp });
        const bookAuthorsInfo = [...bookAuthors.identifiers];
        console.log(...bookAuthors.identifiers);
        return await this.booksRepository.save({
            ...createBookInputExcluded,
            detailCategoryId: {
                id: detailCategoryId.id,
            },
            authors: bookAuthorsInfo,
        });
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
        return await this.booksRepository.find({
            withDeleted: true,
            relations: [
                'detailCategoryId.subCategoryId.mainCategoryId', //
                'detailCategoryId.subCategoryId',
                'detailCategoryId',
            ],
        });
    }
    async restore({
        bookId,
    }: IDeletedBooksRestoreServiceInput): Promise<boolean> {
        const isRestore = await this.booksRepository.restore(bookId);
        return isRestore.affected ? true : false;
    }
}
