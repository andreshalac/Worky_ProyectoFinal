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
            <div className="mb-3 row">
              <label for="inputPassword" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <div className="card-body">
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Sueldo
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Dirección
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Horario
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
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
