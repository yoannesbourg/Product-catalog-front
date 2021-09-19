import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById } from '../../service/ActualProduct/actions';
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
    const { name, description, photo, price } = actualProduct;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductById(id));
        console.log(typeof name);
    }, []);

    const PhotoWrapper = styled.div`
        background-image: url(${photo});
        background-color: white;
        width: 50%;
        height: 50vh;
        border-radius: 24px;
    `;
    return (
        <ProductPageContainer>
            <PhotoWrapper />
            <InfoWrapper>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{price}</p>
            </InfoWrapper>
        </ProductPageContainer>
    );
};

export default withRouter(Product);
