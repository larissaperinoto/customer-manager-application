import { useEffect, useState, MouseEvent } from "react";
import { AxiosError } from "axios";
import { CustomerCard, CustomerForm, Header, SearchForm } from "../components";
import {
  requestCustomers,
  setToken,
  postAPI,
  deleteFromDB,
  updateAPI,
} from "../services/requests";
import "../style/Customers.css";
import ICustomer from "../interfaces/ICustomer";
import FilterMessage from "../components/FilterMessage";
import { Container, Grid, Stack, Typography } from "@mui/material";

export default function Customers() {
  const [customers, setCustomers] = useState([] as any[]);
  const [errorMessage, setErrorMessage] = useState("" as string);
  const [customerToUpdate, setCustomerToUpdate] = useState({} as ICustomer);
  const [filter, setFilter] = useState("" as string);

  async function requestAPI() {
    const customersList = await requestCustomers();
    setCustomers(customersList);
    setFilter("");
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    requestAPI();
  }, []);

  async function handleDeleteCustomer(event: MouseEvent, id: string) {
    event.preventDefault();
    try {
      await deleteFromDB(id);
      requestAPI();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message);
      }
    }
  }

  async function handlePostCustomer(
    event: MouseEvent,
    { name, email, address, phoneNumber, cpf }: ICustomer
  ) {
    event.preventDefault();

    try {
      await postAPI("/customers", {
        name,
        email,
        address,
        phoneNumber,
        cpf,
      });
      requestAPI();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setErrorMessage(error.response?.data.message);
      }
    }
  }

  async function handleUpdateCustomer(event: MouseEvent, customer: ICustomer) {
    event.preventDefault();
    const { _id, name, email, phoneNumber, address, cpf } = customer;
    try {
      await updateAPI(_id as string, {
        name,
        email,
        phoneNumber,
        address,
        cpf,
      });
      requestAPI();
      setCustomerToUpdate({} as ICustomer);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setErrorMessage(error.response?.data.message);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
  }, [errorMessage]);

  function handleSearch(searchBy: string, searchTerm: string) {
    const customersFiltered = customers.filter((user) =>
      user[`${searchBy}`].includes(searchTerm)
    );
    setCustomers(customersFiltered);
    setFilter(`Resultados para ${searchTerm}`);
  }

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item>
          <Container>
            <Stack direction={"column"}>
              <CustomerForm
                handlePostCustomer={handlePostCustomer}
                customerToUpdate={customerToUpdate}
                handleUpdateCustomer={handleUpdateCustomer}
                errorMessage={errorMessage}
              />
              <SearchForm handleSearch={handleSearch} />
              <FilterMessage filter={filter} requestAPI={requestAPI} />
            </Stack>
          </Container>
        </Grid>

        <Grid item alignItems={"center"} justifyContent={"center"}>
          <Grid container alignItems={"center"} justifyContent={"center"}>
            {customers.length ? (
              customers.map((customer, index) => (
                <CustomerCard
                  customer={customer}
                  handleDeleteCustomer={handleDeleteCustomer}
                  setCustomerToUpdate={setCustomerToUpdate}
                  key={index}
                />
              ))
            ) : (
              <Typography variant="body1" textAlign="center">
                Não há clientes para mostrar
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
