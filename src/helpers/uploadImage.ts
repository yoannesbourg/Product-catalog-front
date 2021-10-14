import AxiosConfig from '../config/axios.config';

export const uploadImage = async (image: FormData): Promise<{ status: number; url: string; message?: string }> => {
    try {
        const response = await AxiosConfig.post(`/aws`, image);
        if (response.status !== 200) {
            return {
                status: 400,
                message: "Error. Couldn't upload this image",
                url: '',
            };
        }
        return {
            status: 200,
            url: response.data.Location,
        };
    } catch (error) {
        console.log('error: ', error);
        return {
            status: 500,
            message: "Error. Couldn't upload this image",
            url: '',
        };
    }
};
