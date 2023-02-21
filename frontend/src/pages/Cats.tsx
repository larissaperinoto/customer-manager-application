import { MenuItem, Select, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Header } from "../components";
import statusList from "../services/statusCode";

export default function Cats() {
  const [statusCode, setStatusCode] = useState("");

  return (
    <>
      <Header />
      <section>
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ textAlign: "center", ml: 3, mb: 2 }}
        >
          <Typography variant="h1" textAlign="center" sx={{ fontSize: 20 }}>
            Selecione um status HTTP
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Filtrar por"
            size="small"
            onChange={(event) =>
              setStatusCode(event.target.value as unknown as string)
            }
          >
            {statusList.map((status) => (
              <MenuItem value={status}>{status}</MenuItem>
            ))}
          </Select>
        </Stack>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <img
            src={`https://http.cat/${statusCode}.jpg`}
            alt="Cat with status HTTP"
            width="100%"
          />
        </Container>
      </section>
    </>
  );
}
