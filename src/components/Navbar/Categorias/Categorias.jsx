import { Link } from "react-router-dom";
import React from "react";

export const Categorias = React.memo(() => {
  let categorias = [
    {
      nombre: "deporte",
      id: "deporte",
    },
    {
      nombre: "accion",
      id: "accion",
    },
    {
      nombre: "otro",
      id: "otro",
    },
  ];
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <button className="btn btn-dark">Categorias</button>
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link className="dropdown-item" to={"/category/deporte"}>
            Deportes
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={"/category/accion"}>
            Accion
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={"/category/otro"}>
            Otros
          </Link>
        </li>
      </ul>
    </li>
  );
});
