import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../service/DeleteHandler/actions';
import { updateProductById, fetchProductById } from '../../service/ProductList/actions';
import { uploadImage } from '../../service/UploadImageHandler/actions';
import { withRouter } from 'react-router';

import { StoreState } from '../../service/StoreState';

import {
    ProductPageContainer,
    InfoWrapper,
    PhotoWrapper,
    EditPhotoWrapper,
    Price,
    TitleInput,
    ValueInput,
    PriceInput,
} from './StyledComponents';
import { Loader, LoaderWrapper } from '../../components/Loader/Loader';
import { Product as ProductInterface } from '../../Interfaces/Product';
interface ProductDetailParams {
    match: {
        params: {
            id: string;
        };
    };
}

const Product = (props: ProductDetailParams) => {
    const { id } = props.match.params;
    const store = useSelector((state: StoreState) => state.ProductList);
    const DeleteHandlerStatus = useSelector((state: StoreState) => state.DeleteHandler.status);
    //upload handler
    const UploadImageHandlerResponse = useSelector((state: StoreState) => state.UploadImageHandler.data);
    const isUploadImageLoading = useSelector((state: StoreState) => state.UploadImageHandler.loading);
    const UploadImageHandlerStatus = useSelector((state: StoreState) => state.UploadImageHandler.status);

    const actualProduct = store.data.find((product) => product._id === id);

    const status = useSelector((state: StoreState) => state.ProductList.status);

    //product states
    const [name, setName] = useState<string>(actualProduct ? actualProduct.name : '');
    const [description, setDescription] = useState<string>(actualProduct ? actualProduct.description : '');
    const [photo, setPhoto] = useState<string>(
        actualProduct ? actualProduct.photo : 'https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg',
    );
    const [price, setPrice] = useState<number>(actualProduct ? actualProduct.price : 0);
    const [active, setActive] = useState<boolean>(actualProduct ? actualProduct.active : false);
    //domstates
    const [isEditing, setEditing] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<string>>) => {
        setter(e.target.value);
    };

    const turnOnEditMode = () => {
        if (actualProduct) {
            setAllStates(actualProduct);
            setEditing(!isEditing);
        }
    };

    const handleDelete = () => {
        dispatch(deleteProduct(id));
    };

    const handleUploadImage = async (event: any) => {
        dispatch(uploadImage(event));
    };

    const setAllStates = (actualProduct: ProductInterface) => {
        setName(actualProduct.name);
        setDescription(actualProduct.description);
        setPrice(actualProduct.price);
        setPhoto(actualProduct.uploadedImg ? actualProduct.uploadedImg : actualProduct.photo);
        setActive(actualProduct.active);
    };

    const updateProduct = () => {
        const updatedProduct = {
            name,
            description,
            photo,
            price,
            active,
        };
        dispatch(updateProductById(id, updatedProduct));
        if (status === 200) {
            setEditing(false);
        }
    };

    useEffect(() => {
        if (DeleteHandlerStatus && DeleteHandlerStatus !== 200) {
            alert('Error while deleting');
        } else if (DeleteHandlerStatus && DeleteHandlerStatus === 200) {
            alert('Product was deleted');
            window.location.replace('/');
        }
    }, [DeleteHandlerStatus]);

    useEffect(() => {
        if (UploadImageHandlerResponse) {
            setPhoto(UploadImageHandlerResponse);
        } else if (UploadImageHandlerStatus && UploadImageHandlerStatus !== 200) {
            alert('error');
        }
    }, [UploadImageHandlerResponse]);

    useEffect(() => {
        if (!actualProduct) {
            dispatch(fetchProductById(id));
        }
    }, [actualProduct]);

    return (
        <>
            {actualProduct && (
                <ProductPageContainer>
                    {isEditing ? (
                        <>
                            {isUploadImageLoading ? (
                                <LoaderWrapper>
                                    <Loader width={30} />
                                </LoaderWrapper>
                            ) : (
                                <EditPhotoWrapper
                                    onChange={(event) => {
                                        handleUploadImage(event);
                                    }}
                                    type="file"
                                    name="file"
                                    id="file"
                                    height={0}
                                    photo={photo}
                                ></EditPhotoWrapper>
                            )}
                        </>
                    ) : (
                        <PhotoWrapper photo={actualProduct.photo}></PhotoWrapper>
                    )}

                    <InfoWrapper>
                        <div>
                            {isEditing ? (
                                <>
                                    <TitleInput value={name} onChange={(e) => handleEdit(e, setName)} />
                                    <ValueInput value={description} onChange={(e) => handleEdit(e, setDescription)} />
                                    <PriceInput value={price} onChange={(e) => setPrice(parseInt(e.target.value))} />
                                    <button onClick={updateProduct}>Update</button>
                                </>
                            ) : (
                                <>
                                    <h3>{actualProduct.name}</h3>
                                    <p>{actualProduct.description}</p>
                                    <Price>${actualProduct.price}</Price>
                                </>
                            )}
                        </div>
                        <button onClick={turnOnEditMode}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </InfoWrapper>
                </ProductPageContainer>
            )}
        </>
    );
};

export default withRouter(Product);
