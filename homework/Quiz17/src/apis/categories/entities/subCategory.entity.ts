import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { MainCategory } from './mainCategory.entity';
import { DetailCategory } from './detailCategory.entity';

@Entity()
export class SubCategory {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    category: string;
    @ManyToOne(() => MainCategory)
    // @JoinColumn({ name: 'mainCategoryId' })
    mainCategoryId: MainCategory;
    @CreateDateColumn() // data 등록시 등록시간 자동으로 추가
    createdAt: Date;
    @UpdateDateColumn() // data 수정시 수정시간 자동으로 추가
    updatedAt: Date;
}
