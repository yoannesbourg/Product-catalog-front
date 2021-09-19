import * as singleProductActionTypes from './actionsType';
import { Product } from '../../Interfaces/Product';
interface ReduxRootState {
    data: Product | Record<string, unknown>;
    loading: boolean;
    status?: number;
}

export default interface ReduxActionInterface {
    type: string;
    payload: {
        data: Product | Record<string, unknown>;
        status: number | undefined;
    };
}

const ROOT_VALUE_STATE: ReduxRootState = {
    data: {},
    loading: false,
};

export const ActualProduct = (
    state: ReduxRootState = ROOT_VALUE_STATE,
    action: ReduxActionInterface,
): ReduxRootState => {
    switch (action.type) {
        case singleProductActionTypes.SINGLE_PRODUCT_LOADING:
            return {
                ...state,
                loading: true,
            };

        case singleProductActionTypes.SINGLE_PRODUCT_ERROR:
            if (action.payload) {
                return {
                    ...state,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        case singleProductActionTypes.SINGLE_PRODUCT_SUCCESS:
            if (action.payload) {
                return {
                    data: action.payload.data,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        default:
            return state;
    }
};
