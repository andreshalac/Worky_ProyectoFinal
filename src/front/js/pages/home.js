import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
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
      <div className="texto-explicativo mx-5 my-5 p-4">
        <h2>
          <strong>¿Que es worky?</strong>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </>
  );
};
