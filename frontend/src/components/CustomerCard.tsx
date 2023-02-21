import { Button, Card, Stack, Typography } from "@mui/material";
import ICustomer from "../interfaces/ICustomer";

type CustomerCardProps = {
  Customer: ICustomer;
  handleDeleteCustomer: Function;
  setCustomerToUpdate: Function;
};

export default function CustomerCard({
  customer,
  handleDeleteCustomer,
  setCustomerToUpdate,
}: CustomerCardProps | any) {
  const { _id, name, email, phoneNumber, address, cpf } = customer;

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
          onClick={() => setCustomerToUpdate(customer)}
        >
          Atualizar
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="warning"
          size="small"
          onClick={(event) => handleDeleteCustomer(event, _id)}
        >
          Deletar
        </Button>
      </Stack>
    </Card>
  );
}
