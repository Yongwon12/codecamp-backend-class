import { Book } from 'src/apis/books/entities/book.entity';
import { User } from 'src/apis/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EntityListenerMetadata } from 'typeorm/metadata/EntityListenerMetadata';

@Entity()
export class Payment {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    paymentAt: Date;
    @ManyToOne(() => Book)
    bookId: Book;
    @ManyToOne(() => User)
    userId: User;
}
