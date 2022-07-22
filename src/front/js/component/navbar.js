import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <h1 className="navbar-brand ms-5">Worky</h1>
        <form className="d-flex">
          <button className="btn btn-success me-3" type="button">
            Iniciar Sesión
          </button>
          <button className="btn btn-outline-warning me-5" type="button">
            Registrarse
          </button>
        </form>
      </div>
    </nav>
  );
};
