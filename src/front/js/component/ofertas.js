import React from "react";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom";

/// aqui las ofertas de empleo activas por cada contratante

/// fetch a las ofertas... id del creador de la oferta...
export const Ofertas_totales = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
  
    const handleApply = (job_id) => {
      if (sessionStorage.getItem("token")) {
        actions.idOfertas(job_id);
      } else {
        alert("You must log in before applying");
        navigate("/");
      }
    };
  
    useEffect(() => {
      actions.getEmpleos();
      
    }, []);
    return
<div className="row">
{store.empleos.map((item) => (
  <div
    key={item.id}
    className="col-lg-4 col-md-4 col-sm-6 mx-auto mt-5"
  >
    <div className="card">
      <h5 className="card-header">{item.job}</h5>
      <div className="card-body">
        <div className="card-text d-block">
          <h6>Puesto:{item.job}</h6>
          <h6>Salario:{item.budget}</h6>
          <h6>Dirección:{item.address}</h6>
          <h6>Horario:{item.timeline}</h6>
        </div>
        <div className="card-footer text-center">
          <button
            id={item.id}
            className="btn btn-success"
            onClick={(e) => handleApply(item.id)}
          >
            Aplicar
          </button>
        </div>
        {/* <button className="btn btn-primary" onClick={}>Ir</button> */}
      </div>
    </div>
  </div>
))}
</div>
}