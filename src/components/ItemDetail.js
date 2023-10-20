import React, { useState } from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({ item }) {

    const [cantidad, setCantidad] = useState(1)

    const incrementar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const decrementar = () => {
        cantidad > 1 && setCantidad(cantidad-1)
    }

    const funcionAgregar = () => {
        console.log({...item, cantidad})
    }

    return (
        <div className='container'>
            <div className='producto-detalle'>
                <img src={`${process.env.PUBLIC_URL}/img/${item.imagen}`} alt={item.titulo} />
                <div>
                    <h4>{item.titulo}</h4>
                    <p>Precio: ${item.precio}</p>
                    <p>Categoria: {item.categoria}</p>
                    <ItemCount cantidad={cantidad} incrementar={incrementar} decrementar={decrementar} funcionAgregar={funcionAgregar} />
                    {/* <a className='ver-mas' href={`/item/${item.id}`}>Ver más</a> */}
                </div>
            </div>
        </div>
    )
}
