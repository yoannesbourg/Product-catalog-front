import styled from 'styled-components';

export const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 48px 0;
`;

export const ProductInfos = styled.div`
    // height: 50%;
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 100%;
    // height: 100%;
    // z-index: 100;
    // background-color: #00000059;
    text-align: left;
    padding: 8px 16px;
`;

export const H3 = styled.h3`
    // color: white;
    font-size: 16px;
`;

export const P = styled.p`
    // color: white;
`;

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

export const ProductWrapper = styled.div`
    position: relative;
    background-color: white;
    // padding: 16px;
    margin-bottom: 48px;
    box-shadow: 1px 3px 48px #9999998a;
    margin-right: 24px;
    margin-left: 24px;
    opacity: ${(props: { notActive: boolean }) => (props.notActive ? '0.5' : '1')};
    border-radius: 28px;
    overflow: hidden;
    width: 100%;
`;
