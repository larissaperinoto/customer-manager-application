import {
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ICustomer from "../interfaces/ICustomer";

type CustomerFormProps = {
  handlePostCustomer: Function;
  customerToUpdate: ICustomer;
  handleUpdateCustomer: Function;
  errorMessage: string;
};

export default function CustomerForm({
  handlePostCustomer,
  customerToUpdate,
  handleUpdateCustomer,
  errorMessage,
}: CustomerFormProps | any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cpf, setCpf] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isToUpdate, setIsToUpdate] = useState(false);

  useEffect(() => {
    if (customerToUpdate.name) {
      setIsToUpdate(true);
      const { name, email, phoneNumber, address, cpf } = customerToUpdate;
      setName(name);
      setEmail(email);
      setAddress(address);
      setCpf(cpf);
      setPhoneNumber(phoneNumber);
    } else {
      setIsToUpdate(false);
      setName("");
      setEmail("");
      setAddress("");
      setCpf("");
      setPhoneNumber("");
    }
  }, [customerToUpdate]);

  return (
    <FormControl>
      <Stack direction="column" spacing={1}>
        <Typography variant="subtitle1" textAlign="center">
          Cadastrar novo cliene
        </Typography>
        <TextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          size="small"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Endereço"
          variant="outlined"
          size="small"
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="CPF"
          variant="outlined"
          size="small"
          type="number"
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
        />
        <TextField
          helperText={errorMessage}
          id="outlined-basic"
          label="Telefone"
          variant="outlined"
          size="small"
          type="tel"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        {isToUpdate ? (
          <Button
            type="submit"
            variant="contained"
            onClick={(event) =>
              handleUpdateCustomer(event, {
                _id: customerToUpdate._id,
                name,
                email,
                address,
                cpf,
                phoneNumber,
              })
            }
          >
            Atualizar
          </Button>
        ) : (
          <Button
            type="submit"
            variant="contained"
            onClick={(event) =>
              handlePostCustomer(event, {
                name,
                email,
                address,
                cpf,
                phoneNumber,
              })
            }
          >
            Cadastrar
          </Button>
        )}
      </Stack>
    </FormControl>
  );
}
