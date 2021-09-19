import React from 'react';
import { withRouter } from 'react-router';

interface ProductDetailParams {
    match: {
        params: {
            id: string;
        };
    };
}

const Product = (props: ProductDetailParams) => {
    return (
        <>
            <h1>Product PAGE</h1>
            <p>{props.match.params.id}</p>
        </>
    );
};

export default withRouter(Product);
