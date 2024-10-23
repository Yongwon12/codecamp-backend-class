import { Author } from 'src/apis/authors/entities/author.entity';
import { DetailCategory } from 'src/apis/categories/entities/detailCategory.entity';
import { MainCategory } from 'src/apis/categories/entities/mainCategory.entity';
import { SubCategory } from 'src/apis/categories/entities/subCategory.entity';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
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
    // @JoinColumn({ name: 'detailCategoryId' })
    detailCategoryId: DetailCategory;
    @JoinTable()
    @ManyToMany(() => Author, (authors) => authors.books)
    authors: Author[];
    @CreateDateColumn() // data 등록시 등록시간 자동으로 추가
    createdAt: Date;
    @UpdateDateColumn() // data 수정시 수정시간 자동으로 추가
    updatedAt: Date;
    @DeleteDateColumn()
    deleteAt: Date;
}
