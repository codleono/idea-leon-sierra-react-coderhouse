import './App.css';
import NavBar  from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contact from './components/Contact';
import Carrito from './components/Carrito';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <section className="center">
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer saludo="Productos" />}
              />
              <Route path="/categoria/:id" element={<ItemListContainer />} />
              <Route path="/producto/:id" element={<ItemDetailContainer />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
          </section>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
