import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProducts } from "../service/products/actions"
import { Link } from "react-router-dom"


interface Product {
    description: string;
    _id: string;
}

interface ShopPageProps {
    products: any
}

const Shop = () => {
    const productsStore = useSelector((state: any) => state.productsReducer.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    return (
        <>
            Home
            {
                productsStore && productsStore.map((product: any) => {
                    return (
                        <Link to={`/product/${product._id}`}>
                            <p>{product.description}</p>
                        </Link>
                    )
                })
            }
        </>)
}

export default Shop;