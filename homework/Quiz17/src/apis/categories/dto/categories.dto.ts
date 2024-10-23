import { IsArray, IsObject, IsString } from 'class-validator';

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

export class CreateDetailCategories {
    @IsString()
    id: string;
    @IsString()
    category: string;
}

export class CreateSubCategories {
    @IsString()
    id: string;
    @IsString()
    category: string;
    detailCategory: CreateDetailCategories;
}
export class CreateMainCategories {
    @IsString()
    id: string;
    @IsString()
    category: string;
    subCategory: CreateSubCategories;
}
