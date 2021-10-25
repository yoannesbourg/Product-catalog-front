import styled from 'styled-components';
import { LoaderAlt } from '@styled-icons/boxicons-regular/LoaderAlt';

export const Loader = styled(LoaderAlt)`
    width: ${(props: { width?: number }) => (props.width ? props.width + 'px' : '20px')};
    animation: spin 0.8s linear infinite;
    margin: 48px auto;
    @-moz-keyframes spin {
        100% {
            -moz-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;

export const LoaderWrapper = styled.div`
    height: 50vh;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
`;
