import { Button, Card, Stack, Typography } from "@mui/material";
import IClient from "../interfaces/IClient";

type ClientCardProps = {
  client: IClient;
  handleDeleteClient: Function;
  setClientToUpdate: Function;
};

export default function ClientCard({
  client,
  handleDeleteClient,
  setClientToUpdate,
}: ClientCardProps | any) {
  const { _id, name, email, phoneNumber, address, cpf } = client;

  return (
    <Card sx={{ padding: 5, margin: 1 }}>
      <Typography
        variant="h2"
        textAlign="center"
        sx={{ fontSize: 25, fontWeight: 600 }}
      >
        {name}
      </Typography>
      <Typography variant="body1" textAlign="center">
        {email}
      </Typography>
      <Typography variant="body1" textAlign="center">
        {phoneNumber}
      </Typography>
      <Typography variant="body1" textAlign="center">
        {address}
      </Typography>
      <Typography variant="body1" textAlign="center">
        {cpf}
      </Typography>
      <Stack direction={"row"} spacing={1}>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => setClientToUpdate(client)}
        >
          Atualizar
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="warning"
          size="small"
          onClick={(event) => handleDeleteClient(event, _id)}
        >
          Deletar
        </Button>
      </Stack>
    </Card>
  );
}
