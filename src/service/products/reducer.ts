
import * as productActionTypes from "./actionsType"

interface ReduxRootState {
    data: any,
    loading: boolean
    status?: number
}

export default interface ReduxActionInterface {
    type: string;
    payload: any;
}


const ROOT_VALUE_STATE: ReduxRootState = {
    data: [],
    loading: false,
};

export const productsReducer = (state: ReduxRootState = ROOT_VALUE_STATE, action: ReduxActionInterface) => {
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
                    error: action.payload.message,
                };
            }

            return state;

        case productActionTypes.PRODUCTS_SUCCESS:
            if (action.payload) {
                return {
                    data: action.payload.data.data,
                    loading: false,
                    status: action.payload.data.status,
                };
            }

            return state;

        default: return state;
    }
};
