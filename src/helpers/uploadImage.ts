import axios from 'axios';

export const uploadImage = async (image: FormData): Promise<{ status: number; url: string; message?: string }> => {
    try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/dqyszrjas/image/upload`, image);
        if (response.status !== 200) {
            return {
                status: 400,
                message: "Error. Couldn't upload this imgee",
                url: '',
            };
        }

        return {
            status: 200,
            url: response.data.secure_url,
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
