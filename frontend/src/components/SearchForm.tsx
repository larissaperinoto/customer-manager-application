import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type SearchClientProps = {
  handleSearch: Function;
};

export default function SearchClient({ handleSearch }: SearchClientProps) {
  const [searchTerm, setSearchTerm] = useState(String);
  const [searchBy, setSearchBy] = useState("name");
  const [path, setPath] = useState(String);
  const history = useLocation();

  useEffect(() => {
    setPath(history.pathname);
  }, []);

  return (
    <div className="search_clients_container">
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
            {path === "/users" ? (
              <option value="username">Username</option>
            ) : (
              <>
                <option value="cpf">CPF</option>
                <option value="phoneNumber">Telefone</option>
              </>
            )}
            <option value="email">Email</option>
          </select>
        </label>
        <button
          type="button"
          onClick={() => handleSearch(searchBy, searchTerm)}
        >
          Buscar
        </button>
      </form>
    </div>
  );
}
