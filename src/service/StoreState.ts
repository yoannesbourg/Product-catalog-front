import { Product } from '../Interfaces/Product';
export interface StoreState {
    ProductList: ProductListReducer;
    ActualProduct: ActualProduct;
}

export interface ProductListReducer {
    data: Product[] | [];
    loading: false;
    status?: number;
    listLength: number;
}

export interface ActualProduct {
    data: Product;
    loading: boolean;
    status?: number;
}
