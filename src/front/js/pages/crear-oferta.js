import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/crear-oferta.css";
import { Link, useNavigate } from "react-router-dom";

export const Crear_oferta = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await actions.registro(data);
    if (response) {
      navigate("/trabajadores");
    } else {
      setError("Datos incorrectos");
    }
  };

  return (
    <div className="row">
      <div className="col-6 col-md-12 mx-auto mt-5">
        <div className="container">
          <Link className="link-home text-dark" to={"/home-con-registro"}>
            <h1>Worky</h1>
          </Link>
          <form onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-body">
                <div className="mb-3 row">
                  {error ? <h4>{error}</h4> : ""}
                  <label for="job" className="col-sm-2 col-form-label">
                    Trabajo
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="job"
                      name="job"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label for="budget" className="col-sm-2 col-form-label">
                    Sueldo
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="budget"
                      name="budget"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label for="address" className="col-sm-2 col-form-label">
                    Dirección
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label for="timeline" className="col-sm-2 col-form-label">
                    Horario
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="timeline"
                      name="timeline"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Publicar oferta
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
