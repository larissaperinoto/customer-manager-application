import { Container, Typography, IconButton, Stack, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Header } from "../components";
import { requestDogs } from "../services/requests";
import "../style/Dogs.css";

export default function Dogs() {
  const [dog, setDog] = useState("");
  const reloadIcon = useRef(null);

  async function requestAPI() {
    const dog = await requestDogs();
    setDog(dog);
    reloadIcon.current.className = "rotate_icon";
    setTimeout(() => {
      reloadIcon.current.className = "";
    }, 2000);
  }

  useEffect(() => {
    requestAPI();
  }, []);

  useEffect(() => {
    if (dog.includes("mp4") || dog.includes("webm")) {
      requestAPI();
    }
  }, [dog]);

  return (
    <>
      <Header />
      <Stack direction={"column"}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 5 }}
        >
          <Typography variant="h1" textAlign="center" sx={{ fontSize: 20 }}>
            Recarregue um doguinho
          </Typography>
          <IconButton
            onClick={() => requestAPI()}
            size="small"
            className="button_reload"
          >
            <img
              src="https://img.icons8.com/office/480/null/synchronize.png"
              alt="Reload"
              className="rotate_icon"
              ref={reloadIcon}
              width="40px"
            />
          </IconButton>
        </Grid>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <img src={dog} alt="Dog" width="300px" />
        </Container>
      </Stack>
    </>
  );
}
