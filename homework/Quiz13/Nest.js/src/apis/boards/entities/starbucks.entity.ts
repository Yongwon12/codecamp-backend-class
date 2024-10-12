import { Args, Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Starbucks {
    @PrimaryGeneratedColumn('increment')
    @Field(() => Int)
    id?: number;
    @Column()
    @Field(() => String)
    name: string;
    @Column()
    @Field(() => Int)
    price: number;
    @Column()
    @Field(() => Int)
    kcal: number;
    @Column()
    @Field(() => Int)
    fat: number;
    @Column()
    @Field(() => Int)
    protein: number;
    @Column()
    @Field(() => Int)
    sodium: number;
    @Column()
    @Field(() => Int)
    sugar: number;
    @Column()
    @Field(() => Int)
    caffeine: number;
}
export type ignoreIdStarbucks = Omit<Starbucks, 'id'>;
