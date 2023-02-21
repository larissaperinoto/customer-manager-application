import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
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
  useEffect(() => {
    if (registrationSuccess) {
      setTimeout(() => {
        return <Navigate to="/login" />;
      }, 2000);
    }
  }, [registrationSuccess]);

  return (
    <>
      <ResgistrationForm
        handleRegistration={handleRegistration}
        errorMessage={errorMessage}
        registrationSuccess={registrationSuccess}
      />
    </>
  );
}
