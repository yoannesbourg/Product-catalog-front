import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../service/products/actions';
import { Link } from 'react-router-dom';

import { StoreState } from '../../service/StoreState';

import { ProductList, ProductWrapper } from './StyledComponents';

const Shop = (): JSX.Element => {
    const productsStore = useSelector((state: StoreState) => state.productsReducer.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);

    return (
        <ProductList>
            {productsStore &&
                productsStore.map((product, i) => {
                    return (
                        <Link key={i} to={`/product/${product._id}`}>
                            <ProductWrapper>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>
                                    <strong>{product.price} €</strong>
                                </p>
                            </ProductWrapper>
                        </Link>
                    );
                })}
        </ProductList>
    );
};

export default Shop;
