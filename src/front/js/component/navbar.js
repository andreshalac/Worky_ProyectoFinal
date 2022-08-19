import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Navbar = () => {
  const { store } = useContext(Context);
  return (
    <nav className="navbar fixed-top bg-light">
      <div className="container-fluid">
        <h1 className="navbar-brand ms-5">Worky</h1>
        <div className="d-flex">
          {!store.token ? (
            <Link
              to="/inicio-sesion"
              className="boton-iniciar-sesion btn btn-info me-3"
            >
              Iniciar Sesión
            </Link>
          ) : (
            ""
          )}
          {!store.token ? (
            <Link to="/registro" className="btn btn-success me-5">
              Registrarse
            </Link>
          ) : (
            ""
          )}
          {store.token ? (
            <Link to="/registro" className="btn btn-success me-5">
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
