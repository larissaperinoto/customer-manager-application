import { useState, useEffect } from "react";
import { MouseEvent } from "react";
import { Navigate } from "react-router-dom";
import { postAPI, setToken } from "../services/requests";
import {
  Button,
  Checkbox,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      const { token } = await postAPI("/login", { username, password });
      setToken(token);
      localStorage.setItem("token", token);
      setIsLogged(true);
    } catch (error) {
      setIsLogged(false);
    }
  };

  useEffect(() => {
    if (rememberMe) {
      const token = localStorage.getItem("token");
      if (token) {
        setToken(token);
        setIsLogged(true);
      }
    }
  }, []);

  if (isLogged) return <Navigate to="/users" />;

  return (
    <>
      <Container maxWidth="sm">
        <form>
          <Stack direction="column" spacing={2}>
            <Typography variant="h1" textAlign="center" sx={{ fontSize: 30 }}>
              Entre com sua conta
            </Typography>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              type="text"
              onChange={({ target: { value } }) => setUsername(value)}
            />
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              type="password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
            <Button
              variant="contained"
              type="submit"
              onClick={(event) => handleLogin(event)}
            >
              Entrar
            </Button>

            <Checkbox
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Stack>
        </form>
        <Typography variant="body1" textAlign="center">
          Não tem uma conta? <Link href="/registration">Inscreva-se</Link>
        </Typography>
      </Container>
    </>
  );
}
