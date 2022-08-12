import React from "react";
import "../../styles/crear-oferta.css";
import { Link } from "react-router-dom";

export const Crear_oferta = () => {
  return (
    <div className="row">
      <div className="col-6 col-md-12 mx-auto mt-5">
        <div className="container">
          <Link className="link-home text-dark" to={"/home-con-registro"}>
            <h1>Worky</h1>
          </Link>
          <div className="card">
            <h5 className="card-header">Se busca camarero en Oviedo</h5>
            <div className="card-body">
              <p className="card-text">
                Necesario tener experiencia en el sector, mínimo 5 años, 4
                carreras y 5 idiomas.
              </p>
              <a href="#" className="btn btn-primary">
                Publicar oferta
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
