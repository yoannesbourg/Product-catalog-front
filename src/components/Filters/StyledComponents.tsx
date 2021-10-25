import styled from 'styled-components';
import { ArrowBackOutline } from '@styled-icons/evaicons-outline/ArrowBackOutline';

interface WrapperProps {
    active: boolean;
}

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    width: ${(props: WrapperProps) => (props.active ? '100%' : '8%')};
    z-index: 100;
    cursor: pointer;
    ${(props: WrapperProps) => props.active && '    box-shadow: 1px 3px 48px #9999998a;'}
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Filter = styled.img`
    width: 100px;
    transition: ease-in-out 0.3s;
    &:hover {
        opacity: 0.5;
    }
`;

export const Select = styled.select`
    padding: 8px;
    outline: none;
    border: none;
    cursor: pointer;
`;

export const ArrowBack = styled(ArrowBackOutline)`
    width: 24px;
    height: auto;
    transition: ease-in-out 0.3s;
    &:hover {
        opacity: 0.5;
    }
`;
