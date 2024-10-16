import { ApiProperty } from '@nestjs/swagger';
import { ProductCategory } from 'src/apis/productsCategories/entities/productCategory.entity';
import { ProductSalesLocation } from 'src/apis/productsSalesLocations/entities/productSalesLocation.entity';
import { ProductTag } from 'src/apis/productsTags/entities/productTag.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    /**
     * The name of the product
     * @example 마우스
     */
    @Column()
    name: string;
    @ApiProperty({ example: '좋은 마우스입니다.', description: '상품 설명' })
    @Column()
    description: string;
    @ApiProperty({ example: 3000, description: '상품 가격' })
    @Column()
    price: number;
    @Column({ default: false })
    isSoldOut: boolean;

    // FK 컬럼
    @JoinColumn()
    @OneToOne(() => ProductSalesLocation)
    productSalesLocation: ProductSalesLocation;

    @ManyToOne(() => ProductCategory)
    productCategory: ProductCategory;

    @ManyToOne(() => User)
    user: User;

    @JoinTable()
    @ManyToMany(() => ProductTag, (productTags) => productTags.products)
    productTags: ProductTag[];
}
