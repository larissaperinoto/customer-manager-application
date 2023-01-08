import { useEffect, useState, MouseEvent } from "react";
import { AxiosError } from "axios";
import { ClientCard, ClientForm } from "../components";
import {
  requestClients,
  setToken,
  postAPI,
  deleteFromDB,
} from "../services/requests";
import "../style/Clients.css";
import IClient from "../interfaces/IClient";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  async function requestAPI() {
    const clients = await requestClients();
    setClients(clients);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    requestAPI();
  }, []);

  async function handleDeleteClient(event: MouseEvent, id: string) {
    event.preventDefault();
    try {
      await deleteFromDB(id);
      requestAPI();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message);
      }
    }
  }

  async function handlePostClient(
    event: MouseEvent,
    { name, email, address, phoneNumber, cpf }: IClient
  ) {
    event.preventDefault();

    try {
      await postAPI("/clients", {
        name,
        email,
        address,
        phoneNumber,
        cpf,
      });
      requestAPI();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setErrorMessage(error.response?.data.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
      }
    }
  }

  return (
    <section className="clients_section_container">
      <div className="clients_form_container">
        <ClientForm handlePostClient={handlePostClient} />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <div className="clients_container">
        {clients.map((client, index) => (
          <ClientCard
            client={client}
            handleDeleteClient={handleDeleteClient}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
