import { AxiosError } from "axios";
import { useState } from "react";
import { ResgistrationForm } from "../components";
import ILogin from "../interfaces/ILogin";
import { postAPI } from "../services/requests";

export default function Registration() {
  const [errorMessage, setErrorMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  async function handleRegistration(event: MouseEvent, user: ILogin) {
    event.preventDefault();
    try {
      await postAPI("/user", user);
      setRegistrationSuccess(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorMessage(error.response?.data.message);
      }
    }
  }

  return (
    <>
      <ResgistrationForm handleRegistration={handleRegistration} />
      <p>{errorMessage}</p>
      <p>
        Já tem uma conta? <a href="/login">Entrar</a>
      </p>
      {registrationSuccess && <p>Usuário cadastrado com sucesso</p>}
    </>
  );
}
