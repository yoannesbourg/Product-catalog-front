import styled from 'styled-components';
import { HeartCircle } from '@styled-icons/ionicons-sharp/HeartCircle';
import { NavigateNext } from '@styled-icons/material-twotone/NavigateNext';
import { NavigateBefore } from '@styled-icons/material-twotone/NavigateBefore';
interface ProductWrapperProps {
    notActive: boolean;
    leftColumn: boolean;
}

export const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 48px auto;
    width: 90%;
    max-width: 1100px;
`;

export const ProductWrapper = styled.div`
    position: relative;
    background-color: white;
    margin-top: ${(props: ProductWrapperProps) => (props.leftColumn ? '56px' : '0')};
    margin-bottom: 24px;
    box-shadow: 1px 3px 48px #9999998a;
    margin-right: 24px;
    opacity: ${(props: ProductWrapperProps) => (props.notActive ? '0.5' : '1')};
    border-radius: 28px;
    overflow: hidden;
    width: 200px;
`;

export const ProductInfos = styled.div`
    text-align: left;
    padding: 8px 16px;
`;

export const H3 = styled.h3`
    font-size: 16px;
`;

export const P = styled.p``;

export const Price = styled.p`
    color: #2a2a2a;
    font-weight: bold;
    font-size: 18px;
    padding 6px 0;
`;

export const ProductImage = styled.div`
    background-image: url(${(props: { photo: string }) => props.photo});
    background-size: cover;
    background-repeat: no-repeat;
    min-width: 150px;
    height: 225px;
`;

export const ResultsCount = styled.h3`
    height: fit-content;
    margin-top: 48px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FilterRow = styled(Row)`
    max-width: 1100px;
    padding: 48px 20% 0 20%;
    justify-content: flex-end;
`;

export const Heart = styled(HeartCircle)`
    width: 40px;
`;

export const Button = styled.button`
    margin-bottom: 48px;
    cursor: pointer;
    transition: ease-in-out 0.3s;
    &:hover {
        opacity: 0.5;
    }
`;

export const NextIcon = styled(NavigateNext)`
    width: 24px;
`;

export const PrevIcon = styled(NavigateBefore)`
    width: 24px;
`;
