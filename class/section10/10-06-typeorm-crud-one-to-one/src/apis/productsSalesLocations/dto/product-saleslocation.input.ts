import { OmitType } from '@nestjs/mapped-types';
import { ProductSalesLocation } from '../entities/productSalesLocation.entity';

// data 집어넣을때 id는 자동생성되기에 넣어줄 필요 없으므로
// 에러 발생하지 않게 OmitType으로 id는 제외한 dto를 생성
export class productSalesLocationInput extends OmitType(ProductSalesLocation, [
    'id',
]) {}
