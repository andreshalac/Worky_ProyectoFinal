import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container d-flex mx-auto my-4">
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
  );
};
