import { CreateBookInput, UpdateBookInput } from '../dto/book.dto';
import { Book } from '../entities/book.entity';

export interface IBooksServiceFindOne {
    bookId: string;
}
export interface ICreateBooksServiceInput {
    createBookInput: CreateBookInput;
}

export interface IUpdateBooksServiceInput {
    bookId: string;
    updateBookInput: UpdateBookInput;
}

export interface IUpdateBooksServiceCheckSoldOut {
    book: Book;
}
