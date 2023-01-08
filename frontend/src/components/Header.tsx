import { Navigate } from "react-router-dom";
import "../style/Header.css";

export default function Header() {
  return (
    <header>
      <button type="button" onClick={() => <Navigate to="/users" />}>
        Users
      </button>
      <button type="button" onClick={() => <Navigate to="/dogs" />}>
        Dogs
      </button>
      <button type="button" onClick={() => <Navigate to="/cats" />}>
        HttpCats
      </button>
      <button type="button" onClick={() => <Navigate to="/clients" />}>
        Clientes
      </button>
    </header>
  );
}
