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
                <img src={"https://drive.google.com/file/d/1UuLtm3o62bTw7VTN-IYYmzB__bDcq1Ru/view"} alt={item.titulo} />
                {/* <img src={`${process.env.PUBLIC_URL}/img/${item.imagen}`} alt={item.titulo} /> */}
                <div>
                    <h4>{item.titulo}</h4>
                    <p>Precio: ${item.precio}</p>
                    <p>Categoria: {item.categoria}</p>
                    <ItemCount cantidad={cantidad}
                        incrementar={incrementar}
                        decrementar={decrementar}
                        funcionAgregar={() => agregarAlCarrito(item, cantidad)}
                    />
                    {/* <a className='ver-mas' href={`/item/${item.id}`}>Ver más</a> */}
                </div>
            </div>
        </div>
    )
}
