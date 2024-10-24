import { extend } from '@nestjs/graphql';
import { PartialType, PickType } from '@nestjs/swagger';
import {
    IsArray,
    IsBoolean,
    IsIn,
    IsInt,
    IsObject,
    IsString,
} from 'class-validator';
import { CreateAuthorInput } from 'src/apis/authors/dto/author.dto';
import { Author } from 'src/apis/authors/entities/author.entity';
import { DetailCategory } from 'src/apis/categories/entities/detailCategory.entity';
import { MainCategory } from 'src/apis/categories/entities/mainCategory.entity';
import { SubCategory } from 'src/apis/categories/entities/subCategory.entity';

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
    @IsArray()
    readonly authors: CreateAuthorInput[];
    @IsObject()
    readonly detailCategoryId: DetailCategory;
}

export class UpdateBookInput extends PartialType(CreateBookInput) {}
