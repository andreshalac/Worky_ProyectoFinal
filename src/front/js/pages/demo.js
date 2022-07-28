import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.css";

export const Demo = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-4 my-5 mx-auto">
        <div className="container">
          <div className="col-2">
            <Link to="/">
              <h1 className="text-dark">Worky</h1>
            </Link>
          </div>
        </div>
        <div className="container border mt-2">
          <h3>Iniciar sesión</h3>
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
          <button type="button" className="btn btn-primary mb-2">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};
