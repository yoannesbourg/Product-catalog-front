import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import * as deleteActionTypes from './actionType';
import AxiosConfig from '../../config/axios.config';

export const deleteProduct =
    (id: string): ThunkAction<void, null, unknown, Action<string>> =>
    async (dispatch) => {
        dispatch({
            type: deleteActionTypes.DELETE_PRODUCT_LOADING,
        });
        try {
            const response = await AxiosConfig.delete(`/products/delete/${id}`);

            if (response.status !== 200) {
                return dispatch({
                    type: deleteActionTypes.DELETE_PRODUCT_ERROR,
                    payload: {
                        status: response.status,
                    },
                });
            }
            return dispatch({
                type: deleteActionTypes.DELETE_PRODUCT_SUCESS,
                payload: {
                    data: response.data,
                    status: response.status,
                },
            });
        } catch (error) {
            return dispatch({ type: deleteActionTypes.DELETE_PRODUCT_ERROR });
        }
    };
