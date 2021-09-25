import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import * as productActionTypes from './actionsType';
import AxiosConfig from '../../config/axios.config';

export const fetchAllProducts =
    (page: number, filter: string, limit: number): ThunkAction<void, null, unknown, Action<string>> =>
    async (dispatch) => {
        dispatch({
            type: productActionTypes.PRODUCTS_LOADING,
        });
        try {
            const response = await AxiosConfig.get(`/products/${page}/${filter}/${limit}`);
            if (response.status !== 200) {
                return dispatch({
                    type: productActionTypes.PRODUCTS_ERROR,
                    payload: {
                        status: response.status,
                    },
                });
            }

            return dispatch({
                type: productActionTypes.PRODUCTS_SUCCESS,
                payload: {
                    data: response.data.product,
                    status: response.status,
                    listLength: response.data.listLength,
                },
            });
        } catch (error) {
            return dispatch({ type: productActionTypes.PRODUCTS_ERROR });
        }
    };
