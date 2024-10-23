import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { SubCategory } from './subCategory.entity';

@Entity()
export class MainCategory {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    category: string;
    @CreateDateColumn() // data 등록시 등록시간 자동으로 추가
    createdAt: Date;
    @UpdateDateColumn() // data 수정시 수정시간 자동으로 추가
    updatedAt: Date;
}
