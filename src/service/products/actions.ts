import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import * as productActionTypes from './actionsType';
import AxiosConfig from '../../config/axios.config';

export const fetchAllProducts = (): ThunkAction<void, null, unknown, Action<string>> => async (dispatch) => {
    dispatch({
        type: productActionTypes.PRODUCTS_LOADING,
    });
    try {
        const response = await AxiosConfig.get(`/products`);
        if (response.status !== 200) {
            return dispatch({
                type: productActionTypes.PRODUCTS_ERROR,
            });
        }

        return dispatch({
            type: productActionTypes.PRODUCTS_SUCCESS,
            payload: {
                data: response,
            },
        });
    } catch (error) {
        return dispatch({ type: productActionTypes.PRODUCTS_ERROR });
    }
};
