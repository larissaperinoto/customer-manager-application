import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type SearchClientProps = {
  handleSearch: Function;
};

export default function SearchClient({ handleSearch }: SearchClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  const [path, setPath] = useState("");
  const history = useLocation();

  useEffect(() => {
    setPath(history.pathname);
  }, []);

  return (
    <FormControl sx={{ ml: 3 }}>
      <Stack direction="row" spacing={1}>
        <TextField
          id="outlined-basic"
          label="Insira o termo de busca"
          variant="standard"
          size="small"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Select
          onChange={(event) =>
            setSearchBy(event.target.value as unknown as string)
          }
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filtrar por"
          size="small"
        >
          <MenuItem value="name">Nome</MenuItem>
          <MenuItem value="email">Email</MenuItem>
          {path === "/users" ? (
            <MenuItem value="username">Username</MenuItem>
          ) : (
            <>
              <MenuItem value="cpf">CPF</MenuItem>
              <MenuItem value="phoneNumber">Telefone</MenuItem>
            </>
          )}
        </Select>
        <Button
          type="button"
          variant="contained"
          onClick={() => handleSearch(searchBy, searchTerm)}
          color="secondary"
          size="small"
        >
          Buscar
        </Button>
      </Stack>
    </FormControl>
  );
}
