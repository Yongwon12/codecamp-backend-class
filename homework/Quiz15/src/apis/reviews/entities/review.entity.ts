import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    desc: string;
}
