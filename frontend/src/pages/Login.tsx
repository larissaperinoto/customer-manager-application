import { useState } from "react";
import { MouseEvent } from "react";
import { Navigate } from "react-router-dom";
import { requestLogin, setToken } from "../services/requests";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      const { token } = await requestLogin("/login", { username, password });

      setToken(token);

      localStorage.setItem("token", token);

      setIsLogged(true);
    } catch (error) {
      setIsLogged(false);
    }
  };

  if (isLogged) return <Navigate to="/clients" />;

  return (
    <>
      <section>
        <form>
          <label htmlFor="email-input">
            <input
              type="text"
              value={username}
              onChange={({ target: { value } }) => setUsername(value)}
              placeholder="Username"
            />
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
              placeholder="Senha"
            />
          </label>
          <button type="submit" onClick={(event) => handleLogin(event)}>
            Entrar
          </button>
        </form>
      </section>
    </>
  );
}
