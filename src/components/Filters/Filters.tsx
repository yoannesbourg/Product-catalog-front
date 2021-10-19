import React, { ChangeEvent, useEffect, useState, useMemo } from 'react';

import FilterIcon from '../../Icons/filter.svg';
import { Wrapper, Filter, Select, ArrowBack, Row } from './StyledComponents';

interface FiltersProps {
    isFilterOpen: boolean;
    onClick: () => void;
    handleDropdownChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filters = (props: FiltersProps): JSX.Element => {
    const { isFilterOpen, onClick, handleDropdownChange } = props;
    const _filterOptions = useMemo(() => {
        return {
            all: 'All',
            active: 'Active',
            notActive: 'Not active',
        };
    }, []);
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        handleDropdownChange(event);
    };

    const handleOnClick = () => onClick();
    return (
        <Wrapper active={isFilterOpen}>
            {isFilterOpen ? (
                <Row>
                    <Select onChange={handleChange}>
                        {Object.entries(_filterOptions).map((option, i) => {
                            return <option key={i + option[option.length - 1]}>{option[option.length - 1]}</option>;
                        })}
                    </Select>
                    <ArrowBack onClick={handleOnClick} />
                </Row>
            ) : (
                <Filter src={FilterIcon} alt="filter-icon" onClick={handleOnClick} />
            )}
        </Wrapper>
    );
};

export default Filters;
