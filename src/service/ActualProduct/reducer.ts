import * as singleProductActionTypes from './actionsType';
import { Product } from '../../Interfaces/Product';
import { stat } from 'fs';
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

        case singleProductActionTypes.CREATE_PRODUCT_LOADING:
            return {
                ...state,
                loading: true,
            };

        case singleProductActionTypes.CREATE_PRODUCT_ERROR:
            if (action.payload) {
                return {
                    ...state,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        case singleProductActionTypes.CREATE_PRODUCT_SUCESS:
            if (action.payload) {
                return {
                    ...state,
                    data: action.payload.data,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        case singleProductActionTypes.UPLOAD_IMAGE_LOADING:
            return {
                ...state,
                loading: true,
            };

            return state;

        case singleProductActionTypes.UPLOAD_IMAGE_ERROR:
            if (action.payload) {
                return {
                    ...state,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        case singleProductActionTypes.UPLOAD_IMAGE_SUCESS:
            if (action.payload) {
                state.data.uploadedImg = action.payload.data;
                return {
                    ...state,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        default:
            return state;
    }
};
