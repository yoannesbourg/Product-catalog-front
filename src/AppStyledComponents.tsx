import styled from 'styled-components';
import { Shop } from '@styled-icons/bootstrap/Shop';
import { AddSquare } from '@styled-icons/fluentui-system-filled/AddSquare';

export const AppBackground = styled.div`
    // background-color: red;
    // background-color: #ebeaef;
    min-height: 100vh;
    height: 100%;
    width: 100%;
`;

export const AppContainer = styled.div`
    width: 50%;
    margin: 0 auto;
    // padding: 48px 0;
    text-align: center;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const NavBar = styled.div`
    color: white;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const Ul = styled.ul`
    color: white;
    text-decoration: none;
`;
export const ShopIcon = styled(Shop)`
    width: 20px;
    margin: 20px 20px 0 0;
    transition: ease-in-out 0.3s;
    &:hover {
        opacity: 0.5;
    }
`;

export const AddIcon = styled(AddSquare)`
    width: 20px;
    margin: 20px 20px 0 0;
    transition: ease-in-out 0.3s;
    &:hover {
        opacity: 0.5;
    }
`;
