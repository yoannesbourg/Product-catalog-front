import React, { useEffect, useState } from "react";
import AxiosConfig from '../config/axios.config';
import { Link } from 'react-router-dom';


interface Product {
    description: string;
    _id: string;
}

const Shop = () => {
    const [productList, setProductList] = useState<Product[] | []>([])
    const getProducts = async () => {
        const response = await AxiosConfig.get('/products')
        setProductList(response.data)
    }

    useEffect(() => {
        getProducts()
        productList.map(product => console.log(product.description))
    }, [])

    if (!productList) {
        return <h3>No products</h3>
    }
    return (
        <>
            Home
            {
                productList.map((product: Product) => {
                    return (
                        <Link to={`/product/${product._id}`}>
                            <p>{product.description}</p>
                        </Link>
                    )
                })
            }
        </>)
}

export default Shop