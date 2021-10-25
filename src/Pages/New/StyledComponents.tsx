import styled from 'styled-components';

export const ProductPageContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
    align-items: center;
    overflow-x: hidden;
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

export const PhotoWrapper = styled.input`
    background-image: url(${(props: { photo: string }) => props.photo && props.photo});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: white;
    border: 1px solid #9999998a;
    width: 50%;
    height: 50vh;
    border-radius: 24px;
`;
