import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/demo.css";

export const Inicio_sesion = () => {
  const { store, actions } = useContext(Context);
  /* Utilizo useState donde asigno valores de los input*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  /* Compruebo que los campos no se encuentren vacios, si estan completos, mando datos a metodo login en flux
    si no es asi salta un alert que indica al usuario que debe rellenar los campos del formulario login */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      const results = actions.login(email, password);
      if (results) {
        navigate("/");
      }
    } else {
      notify("Completa todos los campos");
    }
  };
  // Cuando los datos mandados al backend son erróneos invocamos alert
  useEffect(() => {
    if (store.token) {
      navigate("/"); //mandar a ofertas de empleo cuando este listo
    }
  }, []);
  return (
    <div className="mx-auto mt-2 row maincontenedor2">
      <div className="col-12 col-md-4 mx-auto">
        <div className="inicio-sesion container border mt-2">
          <form onSubmit={handleSubmit} className="login">
            <h4 className="text-center my-3 text-white">Iniciar sesión</h4>
            <div className="mb-3">
              <label className="text-white" htmlFor="staticEmail">Email</label>
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="email@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="text-white" htmlFor="inputPassword">Contraseña</label>
              <div>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="******"
                  onChange={(e) =>
                    setPassword(e.target.value)
                  } /** Asigno el valor con onChange a la variable password */
                  value={password}
                  name="password"
                />
              </div>
            </div>
            <input
              className="boton-entrar btn btn-info mb-3 entrarboton"
              type="submit"
              name="submit"
              value="Entrar"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
