import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, fetchProductById, updateProductById, uploadImage } from '../../service/ActualProduct/actions';
import { withRouter } from 'react-router';

import { StoreState } from '../../service/StoreState';

import { ProductPageContainer, InfoWrapper, EditWrapper, PhotoWrapper, EditPhotoWrapper } from './StyledComponents';
interface ProductDetailParams {
    match: {
        params: {
            id: string;
        };
    };
}

const Product = (props: ProductDetailParams) => {
    const { id } = props.match.params;
    const actualProduct = useSelector((state: StoreState) => state.ActualProduct.data);
    const isLoading = useSelector((state: StoreState) => state.ActualProduct.loading);
    const status = useSelector((state: StoreState) => state.ActualProduct.status);

    //product states
    const [name, setName] = useState<string>(actualProduct.name);
    const [description, setDescription] = useState<string>(actualProduct.description);
    const [photo, setPhoto] = useState<string>(actualProduct.photo);
    const [price, setPrice] = useState<number>(actualProduct.price);
    const [active, setActive] = useState<boolean>(actualProduct.active);
    //domstates
    const [isEditing, setEditing] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<string>>) => {
        setter(e.target.value);
    };

    const handleDelete = () => {
        dispatch(deleteProduct(id));
        window.location.replace('/');
    };

    const handleUploadImage = async (event: any) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        formData.append('upload_preset', 'dr973rmw');
        setPhoto(URL.createObjectURL(event.target.files[0]));
        dispatch(uploadImage(formData));
    };

    const setAllStates = () => {
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
        dispatch(fetchProductById(id));
    }, [isEditing]);

    useEffect(() => {
        setAllStates();
    }, [isEditing]);

    if (isLoading) {
        return <p>Loaging</p>;
    }

    return (
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
                <button onClick={() => setEditing(!isEditing)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </InfoWrapper>
        </ProductPageContainer>
    );
};

export default withRouter(Product);
