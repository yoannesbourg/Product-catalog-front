import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById, updateProductById } from '../../service/ActualProduct/actions';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import { StoreState } from '../../service/StoreState';

import { ProductPageContainer, InfoWrapper } from './StyledComponents';

interface ProductDetailParams {
    match: {
        params: {
            id: string;
        };
    };
}

const Product = (props: ProductDetailParams) => {
    const { id } = props.match.params;
    const status = useSelector((state: StoreState) => state.ActualProduct.status);
    const actualProduct = useSelector((state: StoreState) => state.ActualProduct.data);
    // const { name, description, photo, price } = actualProduct;

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
        if (status === 200) {
            setAllStates();
        }
    }, [actualProduct]);

    if (!actualProduct.name) {
        return <p>Loading</p>;
    }
    console.log(actualProduct);

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
                {isEditing ? (
                    <>
                        <input value={name} onChange={(e) => handleEdit(e, setName)} />
                        <input value={description} onChange={(e) => handleEdit(e, setDescription)} />

                        <button onClick={updateProduct}>Update</button>
                    </>
                ) : (
                    <div onClick={() => setEditing(true)}>
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <p>{price} €</p>
                    </div>
                )}

                {/* <p>{description}</p>
                <p>{price}</p> */}
            </InfoWrapper>
        </ProductPageContainer>
    );
};

export default withRouter(Product);
