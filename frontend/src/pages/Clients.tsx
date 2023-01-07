import { useEffect, useState, MouseEvent } from "react";
import { AxiosError } from "axios";
import { ClientCard } from "../components";
import { requestClients, setToken, postAPI } from "../services/requests";
import "../style/Clients.css";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cpf, setCpf] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function requestAPI() {
      const token = localStorage.getItem("token");
      setToken(token);
      const clients = await requestClients();
      setClients(clients);
    }
    requestAPI();
  }, []);

  async function handlePostClient(event: MouseEvent) {
    event.preventDefault();

    try {
      await postAPI("/clients", {
        name,
        email,
        address,
        phoneNumber,
        cpf,
      });
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
        <form>
          <h2>Cadastrar novo cliente</h2>
          <label htmlFor="name_input">
            <input
              type="text"
              value={name}
              placeholder="Nome"
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label htmlFor="email_input">
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label htmlFor="address_input">
            <input
              type="text"
              value={address}
              name="address"
              placeholder="Address"
              onChange={(event) => setAddress(event.target.value)}
            />
          </label>
          <label htmlFor="cpf_input">
            <input
              type="number"
              value={cpf}
              placeholder="CPF"
              onChange={(event) => setCpf(event.target.value)}
            />
          </label>
          <label htmlFor="phoneNumber_input">
            <input
              type="tel"
              value={phoneNumber}
              placeholder="Telefone"
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </label>
          <button type="submit" onClick={(event) => handlePostClient(event)}>
            Cadastrar
          </button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <div className="clients_container">
        {clients.map(({ name, email, address, phoneNumber, cpf }, index) => (
          <ClientCard
            name={name}
            email={email}
            address={address}
            phoneNumber={phoneNumber}
            cpf={cpf}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
