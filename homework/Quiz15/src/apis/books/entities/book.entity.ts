import { Author } from 'src/apis/authors/entities/author.entity';
import { DetailCategory } from 'src/apis/categories/entities/detail-category.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @Column()
    publicAt: Date;
    @Column()
    price: number;
    @Column()
    desc: string;
    @Column()
    transBook: string;
    @Column()
    publish: string;
    @Column({ default: false })
    isSoldOut: boolean;
    @ManyToOne(() => DetailCategory)
    detailCategoryId: DetailCategory;
    @JoinTable()
    @ManyToMany(() => Author, (authors) => authors.books)
    authors: Author[];
}
