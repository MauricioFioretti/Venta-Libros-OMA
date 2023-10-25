import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><h2>Venta de libros!</h2></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/productos/ñandu">Ñandú</Link></li>
                <li><Link className="menu-link" to="/productos/oma">OMA</Link></li>
                <li><Link className="menu-link" to="/productos/avanzados">Avanzados</Link></li>
                <li><Link className="menu-link" to="/productos/ibero-Mayo">Ibero-Mayo</Link></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar
