import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
  return (
    <nav className="navbar fixed-top bg-light">
      <div className="container-fluid">
        <h1 className="navbar-brand ms-5">Worky</h1>
        <div className="d-flex">
          <button className="btn btn-primary me-3" type="button">
            Iniciar Sesión
          </button>
          <button className="btn btn-success me-5" type="button">
            Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
};
