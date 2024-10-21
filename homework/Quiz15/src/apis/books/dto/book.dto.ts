import { PartialType, PickType } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateBookInput {
    @IsString()
    readonly name: string;
    @IsString()
    readonly publicAt: Date;
    @IsInt()
    readonly price: number;
    @IsString()
    readonly desc: string;
    @IsString()
    readonly transBook: string;
    @IsString()
    readonly publish: string;
}

export class UpdateBookInput extends PartialType(CreateBookInput) {}
