import styled from 'styled-components';

export const ProductPageContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`;

export const InfoWrapper = styled.div`
    width: 50%;
    height: 50vh;
`;

export const EditWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #0000005c;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

export const ModalSucess = styled.div`
    position: absolute;
    width: 50%;
    height: 50%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
    border-radius: 24px;
`;
