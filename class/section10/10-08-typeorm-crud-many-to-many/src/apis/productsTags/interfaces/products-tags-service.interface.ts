export interface IProductsTagsServiceBulkInsert {
    names: {
        name: string;
    }[];
}
export interface IProductsTagsServiceBulkUpdate
    extends IProductsTagsServiceBulkInsert {}
export interface IProductsTagsServiceFindByNames {
    tagNames: string[];
}
