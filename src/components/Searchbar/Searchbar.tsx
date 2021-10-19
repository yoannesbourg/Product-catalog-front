import React, { ChangeEvent, useEffect, useState } from 'react';

import { Input, Wrapper, SearchIcon } from './StyledComponents';

import useDebounce from '../../hooks/useDebounce';

interface SearchbarProps {
    isFilterOpen: boolean;
    handleSearch: (value: string) => void;
}

const Searchbar = (props: SearchbarProps): JSX.Element => {
    const { handleSearch, isFilterOpen } = props;
    const [value, setValue] = useState<string>('');
    const debouncedValue = useDebounce<string>(value, 500);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    useEffect(() => {
        handleSearch(value);
    }, [debouncedValue]);
    return (
        <Wrapper isFilterOpen={isFilterOpen}>
            <SearchIcon />
            <Input type="text" value={value} onChange={handleChange} placeholder="Search..." />
        </Wrapper>
    );
};

export default Searchbar;
