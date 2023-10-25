import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import './main.css'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { useState } from 'react';
import { CartContext } from './context/CartContext';
import  Carrito  from './components/Carrito'

function App() {

  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad }
    const nuevoCarrito = [...carrito]
    const estaEnElCarrito = nuevoCarrito.find((prod) => prod.id === itemAgregado.id)

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad
    } else {
      nuevoCarrito.push(itemAgregado)
    }
    setCarrito(nuevoCarrito)
  }

  const cantidadEnCarrito = () =>{
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  return (
    <div>
      <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} exact />
            <Route path="/item/:id" element={<ItemDetailContainer />} exact />
            <Route path="/productos" element={<ItemListContainer />} exact />
            <Route path="/productos/:categoria" element={<ItemListContainer />} exact />
            <Route path="/carrito" element={<Carrito />} exact />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} exact />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  )
}

export default App;
