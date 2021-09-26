import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import * as productActionTypes from './actionsType';
import AxiosConfig from '../../config/axios.config';
import axios from 'axios';
import { Product } from '../../Interfaces/Product';

export const fetchProductById =
    (id: string): ThunkAction<void, null, unknown, Action<string>> =>
    async (dispatch) => {
        dispatch({
            type: productActionTypes.SINGLE_PRODUCT_LOADING,
        });
        try {
            const response = await AxiosConfig.get(`/products/${id}`);

            if (response.status !== 200) {
                return dispatch({
                    type: productActionTypes.SINGLE_PRODUCT_ERROR,
                    payload: {
                        status: response.status,
                    },
                });
            }
            return dispatch({
                type: productActionTypes.SINGLE_PRODUCT_SUCCESS,
                payload: {
                    data: response.data,
                    status: response.status,
                },
            });
        } catch (error) {
            return dispatch({ type: productActionTypes.SINGLE_PRODUCT_ERROR });
        }
    };

export const updateProductById =
    (id: string, newValues: Product): ThunkAction<void, null, unknown, Action<string>> =>
    async (dispatch) => {
        dispatch({
            type: productActionTypes.SINGLE_PRODUCT_LOADING,
        });
        try {
            const response = await AxiosConfig.put(`/products/update/${id}`, { newValues });

            if (response.status !== 200) {
                return dispatch({
                    type: productActionTypes.SINGLE_PRODUCT_ERROR,
                    payload: {
                        status: response.status,
                    },
                });
            }
            return dispatch({
                type: productActionTypes.SINGLE_PRODUCT_SUCCESS,
                payload: {
                    data: response.data,
                    status: response.status,
                },
            });
        } catch (error) {
            return dispatch({ type: productActionTypes.SINGLE_PRODUCT_ERROR });
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
            return dispatch({
                type: productActionTypes.CREATE_PRODUCT_SUCESS,
                payload: {
                    data: response.data,
                    status: response.status,
                },
            });
        } catch (error) {
            return dispatch({ type: productActionTypes.SINGLE_PRODUCT_ERROR });
        }
    };

export const deleteProduct =
    (id: string): ThunkAction<void, null, unknown, Action<string>> =>
    async (dispatch) => {
        dispatch({
            type: productActionTypes.DELETE_PRODUCT_LOADING,
        });
        try {
            const response = await AxiosConfig.delete(`/products/delete/${id}`);

            if (response.status !== 200) {
                return dispatch({
                    type: productActionTypes.DELETE_PRODUCT_ERROR,
                    payload: {
                        status: response.status,
                    },
                });
            }
            return dispatch({
                type: productActionTypes.DELETE_PRODUCT_SUCESS,
                payload: {
                    data: response.data,
                    status: response.status,
                },
            });
        } catch (error) {
            return dispatch({ type: productActionTypes.SINGLE_PRODUCT_ERROR });
        }
    };

export const uploadImage =
    (image: FormData): ThunkAction<void, null, unknown, Action<string>> =>
    async (dispatch) => {
        dispatch({
            type: productActionTypes.UPLOAD_IMAGE_LOADING,
        });
        try {
            const response = await axios.post(`https://api.cloudinary.com/v1_1/dqyszrjas/image/upload`, image);
            if (response.status !== 200) {
                return dispatch({
                    type: productActionTypes.UPLOAD_IMAGE_ERROR,
                    payload: {
                        status: response.status,
                    },
                });
            }

            return dispatch({
                type: productActionTypes.UPLOAD_IMAGE_SUCESS,
                payload: {
                    status: response.status,
                    data: response.data.secure_url,
                },
            });
        } catch (error) {
            return dispatch({ type: productActionTypes.UPLOAD_IMAGE_ERROR });
        }
    };
