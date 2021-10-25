import * as uploadActionTypes from './actionType';
interface ReduxRootState {
    loading: boolean;
    status?: number;
    data?: string;
}

export default interface ReduxActionInterface {
    type: string;
    payload: {
        data: string;
        status: number | undefined;
    };
}

const ROOT_VALUE_STATE: ReduxRootState = {
    loading: false,
};

export const UploadImageHandler = (
    state: ReduxRootState = ROOT_VALUE_STATE,
    action: ReduxActionInterface,
): ReduxRootState => {
    switch (action.type) {
        case uploadActionTypes.UPLOAD_IMAGE_LOADING:
            return {
                ...state,
                loading: true,
            };

        case uploadActionTypes.UPLOAD_IMAGE_ERROR:
            if (action.payload) {
                return {
                    ...state,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        case uploadActionTypes.UPLOAD_IMAGE_SUCCESS:
            if (action.payload) {
                return {
                    ...state,
                    status: action.payload.status,
                    data: action.payload.data,
                    loading: false,
                };
            }
            return state;

        default:
            return state;
    }
};
