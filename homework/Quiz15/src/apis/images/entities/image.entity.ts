import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Book } from 'src/apis/books/entities/book.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    url: string;

    @ManyToOne(() => Book)
    bookId: Book;
}
