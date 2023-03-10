import { Grid, Stack, Typography, Pagination } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import {
  UserCard,
  SearchForm,
  Header,
  FilterMessage,
  Pagination as PaginationComponent,
  PaginationSelect,
} from "../components";
import IUser from "../interfaces/IUser";
import { requestUsers } from "../services/requests";

export default function Users() {
  const [users, setUsers] = useState([] as any[]);
  const [filter, setFilter] = useState("");
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(users.length / usersPerPage);
  const startIndex = currentPage * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentItems = users.slice(startIndex, endIndex);

  async function requestAPI() {
    const data = await requestUsers();
    const users = data.map((user: IUser) => {
      return {
        name: `${user.name.first} ${user.name.last}`,
        age: user.dob.age,
        thumbnail: user.picture.large,
        username: user.login.username,
        email: user.email,
      };
    });
    setUsers(users);
    setFilter("");
  }

  useEffect(() => {
    requestAPI();
  }, []);

  const handleSearch = (searchBy: string, searchTerm: string) => {
    const userFiltered = users.filter((user) =>
      user[`${searchBy}`].includes(searchTerm)
    );
    setUsers(userFiltered);
    setFilter(`Resultados para ${searchTerm}`);
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <SearchForm handleSearch={handleSearch} />
      </Container>
      <FilterMessage filter={filter} requestAPI={requestAPI} />
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {currentItems.length ? (
          currentItems.map(
            ({ name, age, email, thumbnail, username }, index) => {
              return (
                <UserCard
                  thumbnail={thumbnail}
                  name={name}
                  email={email}
                  username={username}
                  age={age}
                  key={index}
                />
              );
            }
          )
        ) : (
          <Typography variant="body2" textAlign="center">
            N??o h?? usu??rios para mostrar
          </Typography>
        )}
      </Grid>
      <Container sx={{ mb: 10, mt: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <PaginationComponent
            setCurrentPage={setCurrentPage}
            pages={pages}
            currentPage={currentPage}
          />
          <PaginationSelect
            usersPerPage={usersPerPage}
            setUsersPerPage={setUsersPerPage}
          />
        </Stack>
      </Container>
    </>
  );
}
