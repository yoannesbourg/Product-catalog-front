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
    height: 50vh;
    background-color: #ebeaef;
    border-radius: 48px 48px 0 0;
    @media (min-width: 768px) {
        border-radius: 48px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: -16px;
    }
    margin-top: -35px;
    padding-bottom: 35px;
    box-shadow: 1px 3px 48px #b3b3b352;
    text-align: left;
    padding: 24px;
    width: 90%;
`;

export const Input = styled.input`
    border: none;
    background: transparent;
    outline: none;
    padding: 6px 0;
    width: 90%;
`;

export const TitleInput = styled(Input)`
    font-size: 20px;
    font-weight: bold;
`;

export const ValueInput = styled(Input)`
    color: #909090;
`;

export const PriceInput = styled(Input)`
    color: #2a2a2a;
    font-weight: bold;
    font-size: 24px;
    padding: 6px 0;
`;

export const PhotoWrapper = styled.div`
    background-image: url(${(props: { photo: string }) => props.photo && props.photo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    height: 50vh;
    text-align: center;
    width: 100%;
`;

export const EditPhotoWrapper = styled.input`
    background-image: url(${(props: { photo: string }) => props.photo && props.photo});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: white;
    height: 50vh;
    text-align: center;
    width: 100%;
`;

export const Price = styled.p`
    color: #2a2a2a;
    font-weight: bold;
    font-size: 24px;
    padding 6px 0;
`;
