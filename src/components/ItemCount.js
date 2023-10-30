export default function ItemCount({ decrementar, incrementar, cantidad, funcionAgregar }) {

    return (
        <div>
            <div className='item-count'>
                <button onClick={decrementar}>-</button>
                <p>{cantidad}</p>
                <button onClick={incrementar}>+</button>
            </div>
            <button className='agregar-al-carrito' onClick={funcionAgregar}>Agregar al carrito</button>
        </div>
    )
}
