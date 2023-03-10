import {
  Button,
  Link,
  Container,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

type RegistrationFormProps = {
  handleRegistration: Function;
  errorMessage: string;
  registrationSuccess: boolean;
};

export default function ReistrationForm({
  handleRegistration,
  errorMessage,
  registrationSuccess,
}: RegistrationFormProps) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (registrationSuccess) {
      setEmail("");
      setPassword("");
      setUsername("");
    }
  }, [registrationSuccess]);

  return (
    <Container maxWidth="sm" sx={{ mt: 20 }}>
      <FormControl>
        <Stack direction="column" spacing={2}>
          <Typography variant="h1" textAlign="center" sx={{ fontSize: 25 }}>
            Cadastre-se logo abaixo
          </Typography>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            helperText={errorMessage}
            variant="outlined"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            variant="contained"
            type="submit"
            onClick={(event) =>
              handleRegistration(event, { username, email, password })
            }
          >
            Cadastrar
          </Button>
          <Typography variant="body1" textAlign="center">
            J?? tem uma conta? <Link href="/login">Entrar</Link>
          </Typography>
          {registrationSuccess && (
            <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
              Usu??rio cadastrado com sucesso
            </Typography>
          )}
        </Stack>
      </FormControl>
    </Container>
  );
}
