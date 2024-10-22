import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @Column()
    email: string;

    @Column()
    password: string;
    @Column()
    birth: number;
    @Column({ default: false })
    isPhone: boolean;
    @Column()
    phone: number;
    @CreateDateColumn() // data 등록시 등록시간 자동으로 추가
    createdAt: Date;
    @UpdateDateColumn() // data 수정시 수정시간 자동으로 추가
    updatedAt: Date;
}
