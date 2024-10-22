import { Book } from 'src/apis/books/entities/book.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Author {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    author: string;
    @ManyToMany(() => Book, (books) => books.authors)
    books: Book[];
}
