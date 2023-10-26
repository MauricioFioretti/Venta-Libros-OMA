import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [titulo, setTitulo] = useState("Todos los Libros")
  const categoria = useParams().categoria

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if (categoria) {
          setProductos(res.filter((prod) => prod.categoria === categoria))
          setTitulo(categoria.charAt(0).toUpperCase() + categoria.slice(1))
        } else {
          setProductos(res)
          setTitulo("Todos los Libros")
        }

      })
  }, [categoria])

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer