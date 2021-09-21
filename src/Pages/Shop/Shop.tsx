import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../service/ProductList/actions';
import { Link } from 'react-router-dom';

import { StoreState } from '../../service/StoreState';

import { ProductList, ProductWrapper } from './StyledComponents';

const Shop = (): JSX.Element => {
    const ProductListStore = useSelector((state: StoreState) => state.ProductList.data);
    const dispatch = useDispatch();
    const _filterValues = {
        all: 'all',
        active: 'active',
        notActive: 'notActive',
    };
    const _filterOptions = {
        all: 'All',
        active: 'Active',
        notActive: 'Not active',
    };
    const [page, setPage] = useState<number>(1);
    const [filter, setFilter] = useState<string>(_filterValues.all);
    useEffect(() => {
        console.log(filter);
        dispatch(fetchAllProducts(page, filter));
    }, [filter, page]);

    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filterValue = e.target.value;

        switch (filterValue) {
            case _filterOptions.active:
                setFilter(_filterValues.active);
                setPage(1);
                break;

            case _filterOptions.notActive:
                setFilter(_filterValues.notActive);
                setPage(1);
                break;

            case _filterOptions.all:
                setFilter(_filterValues.all);
                setPage(1);
                break;
        }
    };

    return (
        <>
            <select onChange={handleFilter}>
                <option>{_filterOptions.all}</option>
                <option>{_filterOptions.active}</option>
                <option>{_filterOptions.notActive}</option>
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
            <button onClick={() => setPage(page - 1)}>Prev</button>
            <button onClick={() => setPage(page + 1)}>Next</button>
        </>
    );
};

export default Shop;
