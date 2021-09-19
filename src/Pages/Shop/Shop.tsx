import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../service/ProductList/actions';
import { Link } from 'react-router-dom';

import { StoreState } from '../../service/StoreState';

import { ProductList, ProductWrapper } from './StyledComponents';

const Shop = (): JSX.Element => {
    const ProductListStore = useSelector((state: StoreState) => state.ProductList.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);

    return (
        <ProductList>
            {ProductListStore &&
                ProductListStore.map((product, i) => {
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
