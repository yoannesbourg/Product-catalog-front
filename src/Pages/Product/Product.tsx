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
    const actualProduct = useSelector((state: StoreState) => state.ActualProduct.data);
    // const { name, description, photo, price } = actualProduct;
    const [name, setName] = useState<string>(actualProduct.name);
    const [description, setDescription] = useState<string>(actualProduct.description);
    const [photo, setPhoto] = useState<string>(actualProduct.photo);
    const [price, setPrice] = useState<number>(actualProduct.price);
    const [active, setActive] = useState<boolean>(actualProduct.active);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductById(id));
        console.log(typeof name);
    }, []);

    const PhotoWrapper = styled.div`
        background-image: url(${actualProduct.photo});
        background-color: white;
        width: 50%;
        height: 50vh;
        border-radius: 24px;
    `;

    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<string>>) => {
        setter(e.target.value);
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
    };

    return (
        <ProductPageContainer>
            <PhotoWrapper />
            <InfoWrapper>
                {/* <h1>{name}</h1> */}
                <input value={name} onChange={(e) => handleEdit(e, setName)} />
                <input value={description} onChange={(e) => handleEdit(e, setDescription)} />
                <button onClick={updateProduct}>Update</button>

                {/* <p>{description}</p>
                <p>{price}</p> */}
            </InfoWrapper>
        </ProductPageContainer>
    );
};

export default withRouter(Product);
