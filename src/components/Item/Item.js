const Item = ({src, alt, precio, stock}) => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {alt}
                </h2>
            </header>
            <picture>
                <img style={{ height: '250px' }} src={src} alt={alt} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p  className="Info">
                    Stock disponible: {stock}
                </p>
            </section>

            <footer>
                <button className="Option">Ver detalle</button>
            </footer>
        </article>
    )
}

export default Item
