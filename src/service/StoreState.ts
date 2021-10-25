import { Product } from '../Interfaces/Product';
export interface StoreState {
    ProductList: ProductListReducer;
    DeleteHandler: DeleteHandler;
    UploadImageHandler: UploadImageHandler;
}

export interface ProductListReducer {
    data: Product[] | [];
    loading: false;
    status?: number;
    listLength: number;
}

export interface DeleteHandler {
    loading: boolean;
    status?: number;
}

export interface UploadImageHandler {
    loading: boolean;
    status?: number;
    data?: string;
}
