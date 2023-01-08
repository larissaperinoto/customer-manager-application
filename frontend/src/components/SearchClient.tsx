import { useState } from "react";

type SearchClientProps = {
  handleSearch: Function;
};

export default function SearchClient({ handleSearch }: SearchClientProps) {
  const [searchTerm, setSearchTerm] = useState(String);
  const [searchBy, setSearchBy] = useState(String);

  return (
    <form>
      <h2>Buscar um cliente</h2>
      <label>
        <input
          type="text"
          placeholder="Insira o termo de busca"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </label>
      <label>
        Buscar por
        <select onChange={(event) => setSearchBy(event.target.value)}>
          <option value="name" selected>
            Nome
          </option>
          <option value="email">Email</option>
          <option value="cpf">CPF</option>
          <option value="phoneNumber">Telefone</option>
        </select>
      </label>
      <button type="button" onClick={() => handleSearch(searchBy, searchTerm)}>
        Buscar
      </button>
    </form>
  );
}
