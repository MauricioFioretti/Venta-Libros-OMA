import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Carrito() {

  const { carrito, vaciarCarrito, precioTotal } = useContext(CartContext)

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
          <h3>Total a pagar: ${precioTotal()}</h3>

          <div className='productos'>
            <button className="agregar-al-carrito" onClick={funcionVaciar}>Vaciar carrito</button>
            <Link to="/checkout"> <button className="agregar-al-carrito" >Finalizar compra</button> </Link>
          </div>
        </> :
        <h3>El carrito está vacío!</h3>
      }
    </div>
  )
}

