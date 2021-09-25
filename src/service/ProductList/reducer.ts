import * as productActionTypes from './actionsType';
import { Product } from '../../Interfaces/Product';
interface ReduxRootState {
    data: Product[] | [];
    loading: boolean;
    status?: number;
    listLength: number | undefined;
}

export default interface ReduxActionInterface {
    type: string;
    payload: {
        data: Product[] | [];
        status: number | undefined;
        listLength: number;
    };
}

const ROOT_VALUE_STATE: ReduxRootState = {
    data: [],
    loading: false,
    listLength: 0,
};

export const ProductListReducer = (
    state: ReduxRootState = ROOT_VALUE_STATE,
    action: ReduxActionInterface,
): ReduxRootState => {
    switch (action.type) {
        case productActionTypes.PRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
            };

        case productActionTypes.PRODUCTS_ERROR:
            if (action.payload) {
                return {
                    ...state,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        case productActionTypes.PRODUCTS_SUCCESS:
            if (action.payload) {
                return {
                    data: action.payload.data,
                    loading: false,
                    status: action.payload.status,
                    listLength: action.payload.listLength,
                };
            }

            return state;

        case productActionTypes.PRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
            };

        case productActionTypes.PRODUCTS_ERROR:
            if (action.payload) {
                return {
                    ...state,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        case productActionTypes.PRODUCTS_SUCCESS:
            if (action.payload) {
                const productList = [];
                productList.push(action.payload.data);
                console.log(action.payload);
                return {
                    ...state,
                    data: action.payload.data,
                    loading: false,
                    status: action.payload.status,
                    listLength: action.payload.listLength,
                };
            }

            return state;

        default:
            return state;
    }
};
