import { IsBoolean, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { OmitType, PartialType, PickType } from '@nestjs/mapped-types';

export class CreateProductInput {
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    @IsNotEmpty()
    @IsString()
    readonly description: string;
    @IsNotEmpty()
    @Min(0)
    @IsInt()
    readonly price: number;
}

export class GetProduct {
    @IsString()
    readonly name: string;
    @IsString()
    readonly description: string;
    @IsInt()
    readonly price: number;

    @IsBoolean()
    readonly isSoldOut: boolean;
}

export class UpdateProductInput extends PartialType(CreateProductInput) {
    // 아래 내용들을 상속받음
    // name?:string
    // description?: string
    // price?: number
}
// PickType(CreateProductInput, ['name', 'price']); => 뽑기
// OmitType(CreateProductInput, ['description']); => 빼기
// PartialType(CreateProductInput);  => 물음표(있어도 되고 없어도 됨)
