import { Injectable, UnprocessableEntityException } from '@nestjs/common';
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
}
