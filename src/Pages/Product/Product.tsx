import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../service/ActualProduct/actions';
import { updateProductById, fetchProductById } from '../../service/ProductList/actions';
import { uploadImage } from '../../helpers/uploadImage';
import { withRouter } from 'react-router';

import { StoreState } from '../../service/StoreState';

import { ProductPageContainer, InfoWrapper, EditWrapper, PhotoWrapper, EditPhotoWrapper } from './StyledComponents';
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
    const actualProduct = store.data.find((product) => product._id === id);

    const isLoading = useSelector((state: StoreState) => state.ProductList.loading);
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
        window.location.replace('/');
    };

    const handleUploadImage = async (event: any) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        formData.append('upload_preset', 'dr973rmw');
        const response = await uploadImage(formData);
        if (response.status !== 200) {
            alert(response.message);
        }
        setPhoto(response.url);
    };

    const setAllStates = (actualProduct: ProductInterface) => {
        setName(actualProduct.name);
        setDescription(actualProduct.description);
        setPrice(actualProduct.price);
        setPhoto(actualProduct.uploadedImg ? actualProduct.uploadedImg : actualProduct.photo);
        setActive(actualProduct.active);
    };

    const updateProduct = () => {
        console.log(photo);
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
        if (!actualProduct) {
            dispatch(fetchProductById(id));
        }
    }, [actualProduct]);

    useEffect(() => {
        // setAllStates();
    }, [isEditing]);

    return (
        <>
            {actualProduct && (
                <ProductPageContainer>
                    {isEditing ? (
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
                    ) : (
                        <PhotoWrapper photo={actualProduct.photo}></PhotoWrapper>
                    )}

                    <InfoWrapper>
                        <div>
                            {isEditing ? (
                                <EditWrapper>
                                    <input value={name} onChange={(e) => handleEdit(e, setName)} />
                                    <input value={description} onChange={(e) => handleEdit(e, setDescription)} />
                                    <input value={price} onChange={(e) => setPrice(parseInt(e.target.value))} />
                                    <button onClick={updateProduct}>Update</button>
                                </EditWrapper>
                            ) : (
                                <>
                                    <h1>{actualProduct.name}</h1>
                                    <p>{actualProduct.description}</p>
                                    <p>{actualProduct.price} €</p>
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
