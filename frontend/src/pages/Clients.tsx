import { useEffect, useState, MouseEvent } from "react";
import { AxiosError } from "axios";
import { ClientCard, ClientForm } from "../components";
import {
  requestClients,
  setToken,
  postAPI,
  deleteFromDB,
  updateAPI,
} from "../services/requests";
import "../style/Clients.css";
import IClient from "../interfaces/IClient";
import SearchClient from "../components/SearchClient";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [clientToUpdate, setClientToUpdate] = useState({} as IClient);
  const [filter, setFilter] = useState(String);

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
      }
    }
  }

  async function handleUpdateClient(event: MouseEvent, client: IClient) {
    event.preventDefault();
    const { _id, name, email, phoneNumber, address, cpf } = client;
    try {
      await updateAPI(_id as string, {
        name,
        email,
        phoneNumber,
        address,
        cpf,
      });
      requestAPI();
      setClientToUpdate({} as IClient);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setErrorMessage(error.response?.data.message);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
  }, [errorMessage]);

  function handleSearch(searchBy: string, searchTerm: string) {
    const clientsFiltered = clients.filter(
      (user) => user[`${searchBy}`] === searchTerm
    );
    setClients(clientsFiltered);
    setFilter(searchBy);
  }

  return (
    <section className="clients_section_container">
      <aside>
        <div className="clients_form_container">
          <ClientForm
            handlePostClient={handlePostClient}
            clientToUpdate={clientToUpdate}
            handleUpdateClient={handleUpdateClient}
          />
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <div className="search_clients_container">
          <SearchClient handleSearch={handleSearch} />
          {filter && <p>{`Filtrando por ${filter}`}</p>}
        </div>
      </aside>
      <div className="clients_container">
        {clients.map((client, index) => (
          <ClientCard
            client={client}
            handleDeleteClient={handleDeleteClient}
            setClientToUpdate={setClientToUpdate}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
