import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductCategory {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ unique: true })
    name: string;
}
