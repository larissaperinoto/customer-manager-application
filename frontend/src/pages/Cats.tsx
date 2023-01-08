import { useState } from "react";
import { Header } from "../components";
import statusList from "../services/statusCode";
import "../style/Cats.css";

export default function Cats() {
  const [statusCode, setStatusCode] = useState("");

  return (
    <>
      <Header />
      <section>
        <div className="status_button_container">
          <h1>Status Cat</h1>
          <label htmlFor="status_select">
            Selecione um status HTTP
            <select onChange={(event) => setStatusCode(event.target.value)}>
              {statusList.map((status) => (
                <option value={status}>{status}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="image_container">
          <img src={`https://http.cat/${statusCode}.jpg`} alt="" />
        </div>
      </section>
    </>
  );
}
