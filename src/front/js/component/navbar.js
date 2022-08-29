import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Footer } from "./footer";

export const Navbar = () => {
  const { store } = useContext(Context);
  return (
    <nav className="navbar bg-light navegacion">
      <div className="container-fluid navegacion interiornav">
        <Link
          to="/"
          className="linkinicial"
          >
            <h1 className="navbar-brand ms-5 mt-2 logo">Worky</h1>
        </Link>
        <div className="d-flex botoness">
          {!store.token ? (
            <Link
              to="/inicio-sesion"
              className="boton-iniciar-sesion btn btn-info me-3 navlinks boton1"
            >
              Iniciar Sesión
            </Link>
          ) : (
            ""
          )}
          {!store.token ? (
            <Link to="/registro" className="btn btn-success me-5 navlinks boton2">
              Registrarse
            </Link>
          ) : (
            ""
          )}
          {store.token ? (
            <Link to="/registro" className="btn btn-success me-5 navlinks boton2">
              Salir
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};
