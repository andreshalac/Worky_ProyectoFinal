import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/registro.css";
import { Context } from "../store/appContext";

export const RegistroEmpresas = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [data, setData] = useState({ type: "empresa" });
  const [error, setError] = useState(null);
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await actions.registro(data);
    if (response) {
      navigate("/crear-oferta");
    } else {
      setError("datos incorrectos");
    }
  };
  return (
    <div className="row">
      <div className="col-12 col-md-4 my-5 mx-auto">
        <div className="container">
          <div className="col-2">
            <Link className="link-home" to="/">
              <h1 className="text-dark">Worky</h1>
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="registro container border mt-2">
            <h3 className="mx-auto my-3">Registro</h3>
            {error ? <h4>{error}</h4> : ""}
            <div className="mb-3">
              <label htmlFor="staticEmail">Nombre de Empresa</label>
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  name="companyName"
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="staticEmail">Email</label>
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="inputName">Teléfono</label>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="inputName">Dirección de la Empresa</label>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    name="address"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword">Contraseña</label>
              <div>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="boton-entrar btn btn-info mb-3"
              onClick={handleSubmit}
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
