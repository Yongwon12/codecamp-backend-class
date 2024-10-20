import { CreateProductInput, UpdateProductInput } from '../dto/product.dto';
import { Product } from '../entities/product.entity';

export interface IProductsServiceCreate {
    createProductInput: CreateProductInput;
}

export interface IProductsServiceFindOne {
    productId: string;
}

export interface IProductsServiceCheckSoldOut {
    product: Product;
}

export interface IProductServiceUpdate {
    productId: string;
    updateProductInput: UpdateProductInput;
}
