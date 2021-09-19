import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../service/products/actions';
import { Link } from 'react-router-dom';

import { StoreState } from '../service/StoreState';

const Shop = (): JSX.Element => {
    const productsStore = useSelector((state: StoreState) => state.productsReducer.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);

    return (
        <>
            Home
            {productsStore &&
                productsStore.map((product, i) => {
                    return (
                        <Link key={i} to={`/product/${product._id}`}>
                            <p>{product.description}</p>
                        </Link>
                    );
                })}
        </>
    );
};

export default Shop;
