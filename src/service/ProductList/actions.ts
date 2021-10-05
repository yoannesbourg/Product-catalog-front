import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import * as productActionTypes from './actionsType';
import AxiosConfig from '../../config/axios.config';

import { Product } from '../../Interfaces/Product';
import { UpdatedProductServerResponse } from '../../Interfaces/UpdatedProductServerResponse';

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

export const updateProductById =
    (id: string, newValues: Product): ThunkAction<void, null, unknown, Action<string>> =>
    async (dispatch) => {
        dispatch({
            type: productActionTypes.UPDATE_PRODUCT_LOADING,
        });
        try {
            const response: UpdatedProductServerResponse = await AxiosConfig.put(`/products/update/${id}`, {
                newValues,
            });

            if (response.status !== 200) {
                return dispatch({
                    type: productActionTypes.UPDATE_PRODUCT_ERROR,
                    payload: {
                        status: response.status,
                    },
                });
            }
            const responseWrapped: Product[] = [];
            responseWrapped.push(response.data);
            return dispatch({
                type: productActionTypes.UPDATE_PRODUCT_SUCCESS,
                payload: {
                    data: responseWrapped,
                    status: response.status,
                },
            });
        } catch (error) {
            return dispatch({ type: productActionTypes.UPDATE_PRODUCT_ERROR });
        }
    };

export const fetchProductById =
    (id: string): ThunkAction<void, null, unknown, Action<string>> =>
    async (dispatch) => {
        dispatch({
            type: productActionTypes.GET_SINGLE_PRODUCT_LOADING,
        });
        try {
            const response = await AxiosConfig.get(`/products/${id}`);

            if (response.status !== 200) {
                return dispatch({
                    type: productActionTypes.GET_SINGLE_PRODUCT_ERROR,
                    payload: {
                        status: response.status,
                    },
                });
            }
            const responseWrapped: Product[] = [];
            responseWrapped.push(response.data);
            return dispatch({
                type: productActionTypes.GET_SINGLE_PRODUCT_SUCCESS,
                payload: {
                    data: responseWrapped,
                    status: response.status,
                },
            });
        } catch (error) {
            return dispatch({ type: productActionTypes.GET_SINGLE_PRODUCT_ERROR });
        }
    };

export const createProduct =
    (newProduct: Product): ThunkAction<void, null, unknown, Action<string>> =>
    async (dispatch) => {
        dispatch({
            type: productActionTypes.CREATE_PRODUCT_LOADING,
        });
        try {
            const response = await AxiosConfig.post(`/products/create/`, { newProduct });

            if (response.status !== 200) {
                return dispatch({
                    type: productActionTypes.CREATE_PRODUCT_ERROR,
                    payload: {
                        status: response.status,
                    },
                });
            }
            const responseWrapped: Product[] = [];
            responseWrapped.push(response.data);
            return dispatch({
                type: productActionTypes.CREATE_PRODUCT_SUCESS,
                payload: {
                    data: responseWrapped,
                    status: response.status,
                },
            });
        } catch (error) {
            return dispatch({ type: productActionTypes.CREATE_PRODUCT_ERROR });
        }
    };
