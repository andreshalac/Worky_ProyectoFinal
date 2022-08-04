import React from "react";
import { Link } from "react-router-dom";
import "../../styles/registro.css";

export const Registro = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-4 my-5 mx-auto">
        <div className="container">
          <div className="col-2">
            <Link className="link-home" to="/">
              <h1 className="text-dark">Worky</h1>
            </Link>
          </div>
        </div>
        <div className="registro container border mt-2">
          <h3 className="mx-auto my-3">Registro</h3>
          <div className="mb-3">
            <label for="staticEmail">Email</label>
            <div>
              <input
                type="text"
                readonly
                className="form-control"
                id="inputEmail"
              />
            </div>
            <div className="mb-3 mt-3">
              <label for="inputName">Nombre</label>
              <div>
                <input type="text" className="form-control" id="inputName" />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label for="inputPassword">Contraseña</label>
            <div>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <button type="button" className="boton-entrar btn btn-info mb-3">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};
