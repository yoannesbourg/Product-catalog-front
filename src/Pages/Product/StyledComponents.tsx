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

export const PhotoWrapper = styled.div`
    background-image: url(${(props: { photo: string }) => props.photo && props.photo});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: white;
    width: 50%;
    height: 50vh;
    border-radius: 24px;
`;

export const EditPhotoWrapper = styled.input`
    background-image: url(${(props: { photo: string }) => props.photo && props.photo});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: white;
    width: 50%;
    height: 50vh;
    border-radius: 24px;
`;
