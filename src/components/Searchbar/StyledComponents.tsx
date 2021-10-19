import styled from 'styled-components';
import { Search } from '@styled-icons/evaicons-solid/Search';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    margin-right: 16px;
    padding: 16px;
    border-radius: 8px;
    width: 80%;
    transition: ease-in-out 0.3s;
    ${(props: { isFilterOpen: boolean }) => props.isFilterOpen && 'display: none;'}
`;

export const Input = styled.input`
    border: none;
    background: transparent;
    font-weight: 700;
    color: #1e1e1e;
    font-size: 16px;
    ::placeholder {
        font-weight: 700;
        color: #1e1e1e;
        font-size: 16px;
    }
    &:focus {
        outline: none;
        // box-shadow: 0px 0px 2px #2222224d;
    }
`;

export const SearchIcon = styled(Search)`
    color: #7d7d7d;
    width: 24px;
    padding-right: 8px;
`;
