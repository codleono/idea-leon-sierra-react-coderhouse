import '../App.css';
import CartWidget from "./CartWidget"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { getCategoria } from "../mocks/api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";

const NavBar = () => {

  const [categorias, setCategorias] = useState([]);

 
  useEffect(() => {
    const q = collection(db, "categorias");
    getDocs(q)
      .then((result) => {
        console.log({ result });
        const lista = result.docs.map((categoria) => {
          return {
            id: categoria.id,
            ...categoria.data(),
          };
        });
        console.log({ lista });
        setCategorias(lista);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark ">
        <div className="container-fluid">
          <div className="mr-60">
        
          </div>
          <div className="collapse navbar-collapse ml-2" id="navbarText ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="navbar-brand text-white"
                  aria-current="page"
                  to="/"
                >
                  Mi TieNda
                </Link>
              </li>
              <li className="nav-item">
                {categorias.map((categoria) => (
                  <Link
                    to={`/categoria/${categoria.id}`}
                    className="navbar-brand text-white"
                    key={categoria.id}
                  >
                    {categoria.nombre_categoria}
                  </Link>
                ))}
              </li>
            </ul>
            <span className="navbar-text">
              <CartWidget />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar
