import {
  Button,
  Link,
  Container,
  FormControl,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

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
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            helperText={errorMessage}
            variant="outlined"
            type="password"
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
            Já tem uma conta? <Link href="/login">Entrar</Link>
          </Typography>
          {registrationSuccess && (
            <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
              Usuário cadastrado com sucesso
            </Typography>
          )}
        </Stack>
      </FormControl>
    </Container>
  );
}
