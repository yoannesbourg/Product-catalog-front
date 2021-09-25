import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../service/ProductList/actions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { StoreState } from '../../service/StoreState';

import { ProductList, ProductInfos, H3, P } from './StyledComponents';

const Shop = (): JSX.Element => {
    const ProductListStore = useSelector((state: StoreState) => state.ProductList.data);
    const ProductListLength = useSelector((state: StoreState) => state.ProductList.listLength);
    const dispatch = useDispatch();
    useMemo;
    const _filterValues = useMemo(() => {
        return {
            all: 'all',
            active: 'active',
            notActive: 'notActive',
        };
    }, []);
    const _filterOptions = useMemo(() => {
        return {
            all: 'All',
            active: 'Active',
            notActive: 'Not active',
        };
    }, []);
    const _limit = 10;
    const [page, setPage] = useState<number>(0);
    const [filter, setFilter] = useState<string>(_filterValues.all);
    const shouldDisplayNextButton = ProductListLength - (page + 1) * _limit > 0;
    useEffect(() => {
        dispatch(fetchAllProducts(page, filter, _limit));
    }, [filter, page]);
    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filterValue = e.target.value;

        switch (filterValue) {
            case _filterOptions.active:
                setFilter(_filterValues.active);
                setPage(0);
                break;

            case _filterOptions.notActive:
                setFilter(_filterValues.notActive);
                setPage(0);
                break;

            case _filterOptions.all:
                setFilter(_filterValues.all);
                setPage(0);
                break;
        }
    };

    const backgroundImage =
        'https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dw11ab6907/images/hi-res/P_026269248FM.jpg?sw=600&sh=900&sm=fit';

    const ProductWrapper = styled.div`
        background-image: url(${backgroundImage});
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        background-color: white;
        padding: 16px;
        width: 150px;
        height: 200px;
        margin-bottom: 48px;
        box-shadow: 1px 3px 11px #9999998a;
        margin-right: 24px;
        margin-left: 24px;
    `;

    return (
        <>
            <select onChange={handleFilter}>
                {Object.entries(_filterOptions).map((option, i) => {
                    return <option key={i + option[option.length - 1]}>{option[option.length - 1]}</option>;
                })}
            </select>
            <ProductList>
                {ProductListStore &&
                    ProductListStore.map((product, i) => {
                        return (
                            <Link key={i} to={`/product/${product._id}`}>
                                <ProductWrapper>
                                    <ProductInfos>
                                        <H3>{product.name}</H3>
                                        <p>{product.description}</p>
                                        <P>{product.price} €</P>
                                    </ProductInfos>
                                </ProductWrapper>
                            </Link>
                        );
                    })}
            </ProductList>
            {page !== 0 && <button onClick={() => setPage(page - 1)}>Prev</button>}
            {shouldDisplayNextButton && <button onClick={() => setPage(page + 1)}>Next</button>}
        </>
    );
};

export default Shop;
