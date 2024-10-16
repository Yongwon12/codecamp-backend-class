import { IsInt, IsString } from 'class-validator';

export class CreateProductInput {
    @IsString()
    readonly name: string;
    @IsString()
    readonly description: string;
    @IsInt()
    readonly price: number;
}
