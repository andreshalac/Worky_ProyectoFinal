import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container d-flex mx-auto my-4 mt-5 pt-4">
        <div className="imagen-trabajadores me-5">
          <div className="bg-white p-2 bg-opacity-50 text-center position-relative top-50 start-50 translate-middle">
            <h1 className="py-2 text-dark">Trabajadores</h1>
          </div>
        </div>
        <div className="imagen-empleadores ms-5">
          <div className="bg-white p-2 text-dark bg-opacity-50 text-center position-relative top-50 start-50 translate-middle">
            <h1 className="py-2">Contratantes</h1>
          </div>
        </div>
      </div>
      <footer className="footer mt-auto py-3 text-center bg-dark text-white">
        <p>Made by Andrés & Daniel.</p>
      </footer>
    </>
  );
};
