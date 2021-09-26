import styled from 'styled-components';
interface ProductWrapperProps {
    photo: string;
    notActive: boolean;
}

export const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 48px 0;
`;

export const ProductInfos = styled.div`
    height: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: #00000059;
`;

export const H3 = styled.h3`
    color: white;
`;

export const P = styled.p`
    color: white;
`;

export const ProductWrapper = styled.div`
    background-image: url(${(props: ProductWrapperProps) => props.photo});
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
    opacity: ${(props: ProductWrapperProps) => (props.notActive ? '0.5' : '1')};
`;
