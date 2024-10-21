import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MainCategory {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    category: string;
}
