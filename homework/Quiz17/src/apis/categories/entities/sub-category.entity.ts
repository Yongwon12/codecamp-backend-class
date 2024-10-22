import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { MainCategory } from './main-category.entity';

@Entity()
export class SubCategory {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    category: string;
    @ManyToOne(() => MainCategory)
    mainCategoryId: MainCategory;
}
