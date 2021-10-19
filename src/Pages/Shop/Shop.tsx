import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../service/ProductList/actions';
import { Link } from 'react-router-dom';

import { StoreState } from '../../service/StoreState';

import {
    ProductList,
    ProductInfos,
    H3,
    P,
    ProductWrapper,
    ProductImage,
    Price,
    ResultsCount,
    Row,
    Heart,
    FilterRow,
} from './StyledComponents';
import Searchbar from '../../components/Searchbar/Searchbar';
import Filters from '../../components/Filters/Filters';

const Shop = (): JSX.Element => {
    const [isFilterOpenState, setIsFilterOpen] = useState<boolean>(false);
    const ProductListStore = useSelector((state: StoreState) => state.ProductList.data);
    const ProductListLength = useSelector((state: StoreState) => state.ProductList.listLength);
    const dispatch = useDispatch();
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
    const _limit = 12;
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

    const handleSearch = (value: string) => {
        // setLfilters((prevFilters) => ({
        //     ...prevFilters,
        //     search: value.toLowerCase(),
        // }));
    };

    return (
        <>
            <FilterRow>
                <Searchbar handleSearch={handleSearch} isFilterOpen={isFilterOpenState} />
                <Filters
                    onClick={() => setIsFilterOpen(!isFilterOpenState)}
                    isFilterOpen={isFilterOpenState}
                    handleDropdownChange={handleFilter}
                />
            </FilterRow>
            <ProductList>
                {/* <ResultsCount>Found 10 Results</ResultsCount> */}
                {ProductListStore &&
                    ProductListStore.map((product, i) => {
                        return (
                            <Link key={i + product.name} to={`/product/${product._id}`}>
                                <ProductWrapper notActive={!product.active} leftColumn={false}>
                                    <ProductImage photo={product.photo} />
                                    <ProductInfos>
                                        <H3>{product.name}</H3>
                                        <P>{product.description}</P>
                                        <Row>
                                            <Price>${product.price}</Price>
                                            <Heart />
                                        </Row>
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
