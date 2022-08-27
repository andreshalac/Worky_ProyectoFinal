import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Ofertas_empleo } from "../pages/ofertas-empleo";
import "../../styles/home.css";

import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getEmpleos();
    console.log(store.empleos);
  }, []);

  return (
    <>
      <div className="container d-flex mx-auto my-4 mt-5 pt-4">
        <Ofertas_empleo />
      </div>
      <footer className="footer mt-auto py-3 text-center bg-dark text-white">
        <p>worky</p>
      </footer>
    </>
  );
};
