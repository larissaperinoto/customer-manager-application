import { useEffect, useState, MouseEvent } from "react";
import { AxiosError } from "axios";
import { ClientCard, ClientForm, Header, SearchForm } from "../components";
import {
  requestClients,
  setToken,
  postAPI,
  deleteFromDB,
  updateAPI,
} from "../services/requests";
import "../style/Clients.css";
import IClient from "../interfaces/IClient";
import FilterMessage from "../components/FilterMessage";

export default function Clients() {
  const [clients, setClients] = useState([] as any[]);
  const [errorMessage, setErrorMessage] = useState("" as string);
  const [clientToUpdate, setClientToUpdate] = useState({} as IClient);
  const [filter, setFilter] = useState("" as string);

  async function requestAPI() {
    const clients = await requestClients();
    setClients(clients);
    setFilter("");
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
    const clientsFiltered = clients.filter((user) =>
      user[`${searchBy}`].includes(searchTerm)
    );
    setClients(clientsFiltered);
    setFilter(`Resultados para ${searchTerm}`);
  }

  return (
    <>
      <Header />
      <aside>
        <div className="clients_form_container">
          <ClientForm
            handlePostClient={handlePostClient}
            clientToUpdate={clientToUpdate}
            handleUpdateClient={handleUpdateClient}
          />
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <SearchForm handleSearch={handleSearch} />
        <FilterMessage filter={filter} requestAPI={requestAPI} />
      </aside>
      <section className="clients_section_container">
        <div className="clients_container">
          {clients.length ? (
            clients.map((client, index) => (
              <ClientCard
                client={client}
                handleDeleteClient={handleDeleteClient}
                setClientToUpdate={setClientToUpdate}
                key={index}
              />
            ))
          ) : (
            <p>Não há clientes para mostrar</p>
          )}
        </div>
      </section>
    </>
  );
}
