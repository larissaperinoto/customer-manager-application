import { useState } from "react";

export default function ClientForm({ handlePostClient }: Function | any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cpf, setCpf] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
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
      <button
        type="submit"
        onClick={(event) =>
          handlePostClient(event, { name, email, address, cpf, phoneNumber })
        }
      >
        Cadastrar
      </button>
    </form>
  );
}
