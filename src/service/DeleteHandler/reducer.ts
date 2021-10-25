import * as productActionTypes from './actionType';
import { Product } from '../../Interfaces/Product';
interface ReduxRootState {
    loading: boolean;
    status?: number;
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
    loading: false,
};

export const DeleteHandler = (
    state: ReduxRootState = ROOT_VALUE_STATE,
    action: ReduxActionInterface,
): ReduxRootState => {
    switch (action.type) {
        case productActionTypes.DELETE_PRODUCT_LOADING:
            return {
                ...state,
                loading: true,
            };

        case productActionTypes.DELETE_PRODUCT_ERROR:
            if (action.payload) {
                return {
                    ...state,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        case productActionTypes.DELETE_PRODUCT_SUCESS:
            if (action.payload) {
                return {
                    ...state,
                    status: action.payload.status,
                };
            }
            return state;

        default:
            return state;
    }
};
