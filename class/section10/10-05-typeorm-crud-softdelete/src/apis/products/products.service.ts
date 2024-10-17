import {
    Delete,
    Injectable,
    Query,
    UnprocessableEntityException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
    IProductServiceUpdate,
    IProductsServiceCheckSoldOut,
    IProductsServiceCreate,
    IProductsServiceFindOne,
} from './interfaces/products-service.interface';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productsRepository: Repository<Product>, //
    ) {}
    create({ createProductInput }: IProductsServiceCreate): Promise<Product> {
        const result = this.productsRepository.save({
            ...createProductInput,
            // 하나 하나 직접 나열하는 방식 (하드코딩)
            // name: '마우스',
            // description: '좋은 마우스요',
            // price: 3000,
        });
        // result안에는 무엇이 담겨있을까
        // result = {
        // id: 'uuid가 담겨있을것',
        // name: "마우스",
        // description: "좋은 마우스",
        // price: 3000
        // }
        return result;
    }
    findAll(): Promise<Product[]> {
        return this.productsRepository.find();
    }
    findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
        return this.productsRepository.findOne({ where: { id: productId } });
    }

    async update({
        productId,
        updateProductInput,
    }: IProductServiceUpdate): Promise<Product> {
        // 기존 있는 로직을 재사용하여, 로직을 통일하자!!
        const product = await this.findOne({ productId });
        // 아래의 코드는 잘못된 코드임
        // const product = await this.productsRepository.findOne({
        //     where: { id: productId },
        // });
        // 검증은 서비스에서 하자!!
        this.checkSoldOut({ product });
        // this.productsRepository.create(); // DB 접속이랑 관련 없음
        // this.productsRepository.insert(); // 결과를 객체로 못 돌려받는 등록 방법
        // this.productsRepository.update(); // 결과를 객체로 못 돌려받는 수정 방법

        const result = this.productsRepository.save({
            ...product, // 수정 후, 수정되지 않은 다른 결과값까지 모두 객체로 돌려받고 싶을 때
            ...updateProductInput,
        });
        return result;

        // 결과를 객체로 돌려받으나, DB를 조회를 해서 돌려받음
    }
    // 예외처리 로직을 가지는 메서드
    // checkSoldOut을 함수로 만드는 이유 => 수정시, 삭제시 등 같은 검증로직 사용
    checkSoldOut({ product }: IProductsServiceCheckSoldOut): void {
        // 예외처리
        if (product.isSoldOut) {
            throw new UnprocessableEntityException(
                '이미 판매완료된 상품입니다.',
            );
        }
        // if (product.isSoldOut) {
        //     throw new HttpException(
        //         '이미 판매 완료된 상품입니다.',
        //         HttpStatus.UNPROCESSABLE_ENTITY,
        //     );
        // }
    }
    async delete({ productId }: IProductsServiceDelete): Promise<boolean> {
        // 1. 실제 삭제
        // const result = await this.productsRepository.delete({ id: productId });
        // return result.affected ? true : false;

        // 2. 소프트 삭제(직접 구현) ( 실무에서는 실제로 삭제하지 않기에 이 방법으로 사용 ) - isDeleted
        //    지웠다고 가정
        // this.productsRepository.update({ id: productId }, { isDeleted: true });

        // 3. 소프트 삭제(직접 구현) - deleteAt
        //    초기값을 비워놓고 값이 채워지면 삭제된 것으로 판단하고,
        //    해당 값을 삭제한 시점으로 채우는 것
        // this.productsRepository.update(
        //     { id: productId },
        //     { deletedAt: new Date() },
        // );

        // 4. 소프트 삭제(TypeORM 제공 ) - softRemove라는 기능이 내장되어 있음
        //   단점: id로만 삭제가능
        //   장점: 여러 ID 한번에 지우기 가능
        //        .softRemove([{id:qqq},{id:aaa},{id:zzz}])
        //   오래된 데이터 한번에 지우는 용으로 사용이 가능
        // this.productsRepository.softRemove({ id: productId });

        // 5. 소프트 삭제(TypeORM 제공) -  softDelete
        //    단점: 여러ID 한번에 지우기 불가능
        //    장점: 다른 컬럼으로도 삭제 가능
        const result = await this.productsRepository.softDelete({
            id: productId,
        });
        return result.affected ? true : false; // affected -> 값이 있는지 없는지 판단
    } // 값이 있으면 true, 없으면 false 반환
    // !! 사용시 deleteAt 컬럼이 무조건 있어야함
}
interface IProductsServiceDelete {
    productId: string;
}
