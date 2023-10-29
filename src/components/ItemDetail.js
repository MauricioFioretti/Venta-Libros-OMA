import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'

export default function ItemDetail({ item }) {

    const { carrito, agregarAlCarrito } = useContext(CartContext)
    console.log(carrito)

    const [cantidad, setCantidad] = useState(1)

    const incrementar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const decrementar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div className='container'>
            <div className='producto-detalle'>
                
                <img src={`${item.imagen}`} alt={item.titulo} />
                <div>
                    <h4>{item.titulo}</h4>
                    <p>Precio: ${item.precio}</p>
                    <p>Categoria: {item.categoria}</p>
                    <ItemCount cantidad={cantidad}
                        incrementar={incrementar}
                        decrementar={decrementar}
                        funcionAgregar={() => agregarAlCarrito(item, cantidad)}
                    />
                </div>
            </div>
        </div>
    )
}
