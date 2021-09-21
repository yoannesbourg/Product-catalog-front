import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById, updateProductById, deleteProduct } from '../../service/ActualProduct/actions';
import { RouteComponentProps, withRouter } from 'react-router';
// import { createBrowserHistory } from 'history';
import styled from 'styled-components';

import { StoreState } from '../../service/StoreState';

import { ProductPageContainer, InfoWrapper, EditWrapper } from './StyledComponents';
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

    //product states
    const [name, setName] = useState<string>(actualProduct.name);
    const [description, setDescription] = useState<string>(actualProduct.description);
    const [photo, setPhoto] = useState<string>(actualProduct.photo);
    const [price, setPrice] = useState<number>(actualProduct.price);
    const [active, setActive] = useState<boolean>(actualProduct.active);
    //domstates
    const [isEditing, setEditing] = useState<boolean>(false);
    const dispatch = useDispatch();

    const PhotoWrapper = styled.div`
        background-image: url(${actualProduct.photo});
        background-size: cover;
        background-repeat: no-repeat;
        background-color: white;
        width: 50%;
        height: 50vh;
        border-radius: 24px;
    `;

    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<string>>) => {
        setter(e.target.value);
    };

    const handleDelete = () => {
        window.location.replace('/');
    };

    const setAllStates = () => {
        setName(actualProduct.name);
        setDescription(actualProduct.description);
        setPrice(actualProduct.price);
        setPhoto(actualProduct.photo);
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
        setEditing(false);
    };

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [isEditing]);

    useEffect(() => {
        setAllStates();
    }, [isEditing]);

    if (!actualProduct.name) {
        return <p>Loading</p>;
    }

    return (
        <ProductPageContainer>
            {/* <label htmlFor="file" className="pencil banner_button">
                upload
            </label>

            <input
                onChange={async (e: any) => {
                    console.log(e.target.files[0]);
                }}
                type="file"
                name="file"
                id="file"
                hidden
                height={0}
            /> */}
            <PhotoWrapper />

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
