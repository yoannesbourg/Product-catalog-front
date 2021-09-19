import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByActive } from '../../service/ActualProduct/actions';
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

    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filter = e.target.value;
        console.log(filter);

        if (filter === 'All') {
            dispatch(fetchAllProducts());
        } else if (filter === 'Active') {
            dispatch(filterByActive(true));
        } else if (filter === 'Not active') {
            dispatch(filterByActive(false));
        }
    };

    return (
        <>
            <select onChange={handleFilter}>
                <option>Active</option>
                <option>Not active</option>
                <option>All</option>
            </select>
            <ProductList>
                {ProductListStore &&
                    ProductListStore.map((product, i) => {
                        return (
                            <Link key={i} to={`/product/${product._id}`}>
                                <ProductWrapper>
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <p>{product.active.toString()}</p>
                                    <p>
                                        <strong>{product.price} €</strong>
                                    </p>
                                </ProductWrapper>
                            </Link>
                        );
                    })}
            </ProductList>
        </>
    );
};

export default Shop;
