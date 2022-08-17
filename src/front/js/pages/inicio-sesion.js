import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Navigate } from "react-router-dom";
import "../../styles/demo.css";

export const Inicio_sesion = () => {
  const { store, actions } = useContext(Context);
  /* Utilizo useState donde asigno valores de los input*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* Compruebo que los campos no se encuentren vacios, si estan completos, mando datos a metodo login en flux
    si no es asi salta un alert que indica al usuario que debe rellenar los campos del formulario login */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      actions.login(email, password);
    } else {
      notify("Completa todos los campos");
    }
  };
  // Cuando los datos mandados al backend son erróneos invocamos alert
  useEffect(() => {
    if (store.errorAuth) {
      notify("Datos Erroneos");
    }
  }, []);
  return (
    {store.auth ? (
      <Navigate to={"/"} />
    ) : (
    <div className="row">
      <div className="col-12 col-md-4 my-5 mx-auto">
        <div className="container">
          <div className="col-2">
            <Link className="link-home" to="/">
              <h1 className="text-dark">Worky</h1>
            </Link>
          </div>
        </div>
        <div className="inicio-sesion container border mt-2">
          <form onSubmit={handleSubmit} className="login">
            <h4 className="ms-5 ps-5 my-3">Iniciar sesión</h4>
            <div className="mb-3">
              <label htmlFor="staticEmail">Email</label>
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Escribe tu email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                />{" "}
                {""}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword">Contraseña</label>
              <div>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                  onChange={(e) =>
                    setPassword(e.target.value)
                  } /** Asigno el valor con onChange a la variable password */
                  value={password}
                  name="password"
                />{" "}
                {""}
              </div>
            </div>
            <input
              className="boton-entrar btn btn-info mb-3"
              type="submit"
              name="submit"
              value="Entrar"
            />
          </form>{" "}
          {""}
        </div>
      </div>
    </div>
    )}
   
  );
};
