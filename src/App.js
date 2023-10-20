import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import './main.css'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} exact />
          <Route path="/item/:id" element={<ItemDetailContainer />} exact />
          <Route path="/productos" element={<ItemListContainer />} exact />
          <Route path="/productos/:categoria" element={<ItemListContainer />} exact />
          {/* <Route path="*" element={<h1>404 NOT FOUND</h1>} exact /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
