import React from 'react'
import cart from './assets/carrito.svg'
import './style.css'

export default function CartWidget() {
    return (
        <div>
            <img src={cart} alt='carrito'></img>
            0
        </div>
    )
}
