import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SubCategory } from './sub-category.entity';

@Entity()
export class DetailCategory {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    category: string;
    @ManyToOne(() => SubCategory)
    subCategoryId: SubCategory;
}
