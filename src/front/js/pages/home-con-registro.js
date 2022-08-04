import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home-con-registro.css";

export const Homeconregistro = () => {
  return (
    <>
      <div>
        <h4 className="mt-2 text-white position-absolute top-0 start-50 translate-middle-x">
          Bienvenido a Worky cubrimos necesidades
        </h4>
      </div>
      <div className="container d-flex mx-auto my-4 mt-5">
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
    </>
  );
};
