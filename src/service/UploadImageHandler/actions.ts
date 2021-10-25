import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import * as uploadActionTypes from './actionType';
import AxiosConfig from '../../config/axios.config';

export const uploadImage =
    (event: any): ThunkAction<void, null, unknown, Action<string>> =>
    async (dispatch) => {
        dispatch({
            type: uploadActionTypes.UPLOAD_IMAGE_LOADING,
        });
        try {
            const formData = new FormData();
            formData.append('image', event.target.files[0]);
            const response = await AxiosConfig.post(`/aws`, formData);

            if (response.status !== 200) {
                return dispatch({
                    type: uploadActionTypes.UPLOAD_IMAGE_ERROR,
                    payload: {
                        status: response.status,
                    },
                });
            }
            console.log('response', response);
            return dispatch({
                type: uploadActionTypes.UPLOAD_IMAGE_SUCCESS,
                payload: {
                    data: response.data.Location,
                    status: response.status,
                },
            });
        } catch (error) {
            return dispatch({ type: uploadActionTypes.UPLOAD_IMAGE_SUCCESS });
        }
    };
