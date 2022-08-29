import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Ofertas_empleo } from "../pages/ofertas-empleo";
import "../../styles/home.css";
import { Footer } from "../component/footer";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getEmpleos();
    console.log(store.empleos);
  }, []);

  return (
    <>
      <div className="container d-flex mx-auto maincontenedor mt-2">
        <Ofertas_empleo />
      </div>
    </>
  );
};
