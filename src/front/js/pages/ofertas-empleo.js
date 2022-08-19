import React from "react";
import "../../styles/ofertas-empleo.css";
import { Link } from "react-router-dom";

export const Ofertas_empleo = () => {
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleData = async (event) => {
    event.preventDefault();
    const response = await actions.registro(data);
    if (response) {
      navigate("/");
    } else {
      setError("datos incorrectos");
    }
  };
  return (
    <>
      <div className="row">
        <Link
          className="link-home text-dark ms-4 mt-2"
          to={"/home-con-registro"}
        >
          <h1>Worky</h1>
        </Link>
        <Link className="link-home text-dark ms-4 mt-2" to={"/crear-oferta"}>
          <button className="btn btn-success">Crear oferta</button>
        </Link>
      </div>
      <div className="row">
        <div className="col-6 col-md-12 mx-auto mt-5">
          <div className="container">
            <div class="card">
              <h5 class="card-header">Trabajo</h5>
              <div class="card-body">
                <p class="card-text d-block">
                  <h6>Sueldo:</h6>
                  <h6>Dirección:</h6>
                  <h6>Horario:</h6>
                </p>
                <button class="btn btn-primary">Postularse</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
