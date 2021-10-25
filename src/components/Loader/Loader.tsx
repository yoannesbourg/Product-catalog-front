import styled from 'styled-components';
import { LoaderAlt } from '@styled-icons/boxicons-regular/LoaderAlt';

export const Loader = styled(LoaderAlt)`
    width: 20px;
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
