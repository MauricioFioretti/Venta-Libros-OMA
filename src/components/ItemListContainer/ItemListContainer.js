import React, { useEffect, useState } from 'react'
import {getProducts} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

export default function ItemListContainer({greeting}) {

    const[products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products = {products} />
        </div>
    )
}