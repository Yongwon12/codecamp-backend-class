import { IsArray } from 'class-validator';

export class CategoriesDto {
    // @IsString()
    // mainCategory: string;
    // @IsString()
    // subCategory: string;
    // @IsString()
    // detailCategory: string;
    @IsArray()
    category: string[];
}
