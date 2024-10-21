import { Book } from 'src/apis/books/entities/book.entity';
import { Review } from 'src/apis/reviews/entities/review.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class StarRatio {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    starRatio: string;
    @Column()
    starRatioAt: Date;
    @ManyToOne(() => User)
    userId: User;
    @ManyToOne(() => Book)
    bookId: Book;
    @JoinColumn()
    @OneToOne(() => Review)
    reviewId: string;
}
