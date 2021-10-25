import { Product } from '../Interfaces/Product';
export interface StoreState {
    ProductList: ProductListReducer;
    DeleteHandler: DeleteHandler;
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

export interface DeleteHandler {
    loading: boolean;
    status?: number;
}
