import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default function NavBar() {
    return (
        <nav>
            <div className="header__titulo navbar-brand ">
                <h3 className="secretaria">SECRETARÍA REGIONAL CENTRO</h3>
                <h3 className="olimpiadas">Olimpiada Matemática Argentina </h3>
            </div>
            <div>
                <button className='btn btn-success'>Ñandú</button>
                <button className='btn btn-success'>OMA</button>
                <button className='btn btn-success'>Universitarios</button>
                <button className='btn btn-success'>Rioplatense</button>
                <button className='btn btn-success'>Iberoamericana</button>
                <button className='btn btn-success'>Mayo</button>
            </div>
            <CartWidget/>
        </nav>
    )
}
