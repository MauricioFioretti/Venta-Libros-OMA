import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ producto }) {
    return (
        <div className='producto'>
            <img src={`${process.env.PUBLIC_URL}/img/${producto.imagen}`} alt={producto.titulo} />
            <div>
                <h4>{producto.titulo}</h4>
                <p>Precio: ${producto.precio}</p>
                <p>Categoria: {producto.categoria}</p>
                <Link className='ver-mas' to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
    )
}
