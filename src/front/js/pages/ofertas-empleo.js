import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/ofertas-empleo.css";
import { Link, useNavigate } from "react-router-dom";

export const Ofertas_empleo = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleApply = (job_id) => {
    if (sessionStorage.getItem("token")) {
      actions.aplicarOfertas(job_id);
    } else {
      alert("You must log in before applying");
      navigate("/registro");
    }
  };

  useEffect(() => {
    actions.getEmpleos();
    //hacer fetch de pedido de empleos => joboffer para que se almacenen en empleo
  }, []);
  return (
    <>
      <div className="row">
        <Link
          className="link-home text-dark ms-4 mt-2"
          to={"/home-con-registro"}
        >
          <h1>Worky</h1>
        </Link>
        {/* <Link className="link-home text-dark ms-4 mt-2" to={"/crear-oferta"}>
          <button className="btn btn-success">
            Ofertas de empleo disponibles
          </button>
        </Link> */}
      </div>
      <div className="row">
        {store.empleos.map((item) => (
          <div
            key={item.id}
            className="col-lg-4 col-md-4 col-sm-6 mx-auto mt-5"
          >
            <div className="card">
              <h5 className="card-header">{item.job}</h5>
              <div className="card-body">
                <div className="card-text d-block">
                  <h6>Puesto:{item.job}</h6>
                  <h6>Salario:{item.budget}</h6>
                  <h6>Dirección:{item.address}</h6>
                  <h6>Horario:{item.timeline}</h6>
                </div>
                <div className="card-footer text-center">
                  <button
                    id={item.id}
                    className="btn btn-success"
                    onClick={(e) => handleApply(item.id)}
                  >
                    Aplicar
                  </button>
                </div>
                {/* <button className="btn btn-primary" onClick={}>Ir</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
