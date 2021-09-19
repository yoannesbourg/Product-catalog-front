import { Product } from '../Interfaces/Product';
export interface StoreState {
    productsReducer: {
        data: Product[] | [];
        loading: false;
    };
}
