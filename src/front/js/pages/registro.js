import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/registro.css";
import { Context } from "../store/appContext";
import { RegistroEmpresas } from "./registroEmpresas";

export const Registro = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const [tipos, setTipos] = useState([]);
  const [data, setData] = useState({ type: "trabajador" });
  const [error, setError] = useState(null);
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    actions.getTipos().then((data) => {
      setTipos(data);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await actions.registro(data);
    if (response) {
      navigate("/");
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
        {show ? (
          <div>
        Registrar como empresa?
        <button className="btn btn-primary" onClick={()=>setShow(false)}>Cambiar a empresa</button>
          <form onSubmit={handleSubmit}>
            <div className="registro container border mt-2">
              <h3 className="mx-auto my-3">Registro</h3>
              {error ? <h4>{error}</h4> : ""}
              <div className="mb-3">
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
                  <label htmlFor="inputName">Nombre de Usuario</label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      id="inputUserName"
                      name="userName"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="inputName">Tipo de trabajo</label>
                  <div>
                    <select name="tipos" onChange={handleChange}>
                      <option value="" disabled>
                        Escoga un tipo
                      </option>
                      {tipos.map((value, index) => {
                        return (
                          <option key={index} value={value.id}>
                            {value.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="inputName">Dirección</label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      id="inputDireccion"
                      name="address"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="inputName">Teléfono</label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      id="inputphone"
                      name="phone"
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
        ) : (
          <div>
            <p>Volver al registro como usuario?</p>
            <button className="btn btn-primary" onClick={()=>setShow(true)}>Cambiar a Usuario</button>
            <RegistroEmpresas />
          </div>
        )}
      </div>
    </div>
  );
};
