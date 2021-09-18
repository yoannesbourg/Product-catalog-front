import React from "react";
import { withRouter, RouteComponentProps } from "react-router";

type ProductDetailParams = {
    id: string;
};

const Product = (props: RouteComponentProps<ProductDetailParams>) => {

    return (
        <>
            <h1>Product PAGE</h1>
            <p>{props.match.params.id}</p>
        </>)
}

export default withRouter(Product)