import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext)

    return (
        <div>
            <Link className="menu-link" to="/carrito">
                <img src={`${process.env.PUBLIC_URL}/img/carrito.svg`} alt="carrito-compras"></img>
                {cantidadEnCarrito()}
            </Link>
        </div>
    )
}

export default CartWidget