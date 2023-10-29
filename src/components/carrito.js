import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Carrito() {

  const { carrito, vaciarCarrito, precioTotal } = useContext(CartContext)
  // const precioTotal = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)

  const funcionVaciar = () => {
    vaciarCarrito()
  }

  return (
    <div className='container'>
      <h1 className='main-title'> Carrito</h1>

      {
        carrito.map((prod) => (
          <div key={prod.id}>
            <h2>{prod.titulo}</h2>
            <p>Precio por unidad: ${prod.precio}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio total: ${prod.precio * prod.cantidad}</p>
            <br />
          </div>
        ))
      }

      {carrito.length > 0 ?
        <>
          <h3>Total a pagar: ${precioTotal}</h3>
          <button onClick={funcionVaciar}>Vaciar</button>
          <button className="main-title"><Link to="/checkout">Finalizar compra</Link></button>

          {/* <Link to="/checkout">Finalizar compra</Link> */}
          
        </> :
        <h3>El carrito está vacío!</h3>
      }


    </div>
  )
}

