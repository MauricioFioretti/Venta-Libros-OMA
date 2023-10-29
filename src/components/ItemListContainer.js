import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const categoria = useParams().categoria

  useEffect(() => {

    const productosRef = collection(db, "productos")
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef 
    // if(categoria) {
    //   const que = query(productosRef, where("categoria", "==", categoria))
    //   setTitulo(categoria)
    // } else {
    //   const que = productosRef
    //   setTitulo("Todos los Libros")
    // }

    // const q = que

    getDocs(q)
      .then((resp) => {
            setProductos(
              resp.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
              })
            )
      })

  }, [categoria])

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer