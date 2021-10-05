import { Product } from './Product';

export interface UpdatedProductServerResponse {
    status: number;
    data: Product;
}
