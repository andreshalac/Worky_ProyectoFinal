import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <nav className="navbar fixed-top bg-light">
        <div className="container-fluid">
          <h1 className="navbar-brand ms-5">Worky</h1>
          <div className="d-flex">
            <button
              className="boton-iniciar-sesion btn btn-info me-3"
              type="button"
            >
              Iniciar Sesión
            </button>
            <button className="btn btn-success me-5" type="button">
              Registrarse
            </button>
          </div>
        </div>
      </nav>
      <div className="container d-flex mx-auto my-4 mt-5 pt-4">
        <div className="imagen-trabajadores me-5">
          <div className="bg-white p-2 text-dark bg-opacity-50 text-center position-relative top-50 start-50 translate-middle">
            <h1 className="texto-imagen py-2">Trabajadores</h1>
          </div>
        </div>
        <div className="imagen-empleadores ms-5">
          <div className="bg-white p-2 text-dark bg-opacity-50 text-center position-relative top-50 start-50 translate-middle">
            <h1 className="texto-imagen py-2">Contratantes</h1>
          </div>
        </div>
      </div>
      <footer className="footer mt-auto py-3 text-center bg-dark text-white">
        <p>Made by Andrés & Daniel.</p>
      </footer>
    </>
  );
};
