import { useState, useEffect } from "react";
import { MouseEvent } from "react";
import { Navigate } from "react-router-dom";
import { postAPI, setToken } from "../services/requests";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      const { token } = await postAPI("/login", { username, password });
      setToken(token);
      localStorage.setItem("token", token);
      setIsLogged(true);
    } catch (error) {
      setIsLogged(false);
    }
  };

  useEffect(() => {
    if (rememberMe) {
      const token = localStorage.getItem("token");
      if (token) {
        setToken(token);
        setIsLogged(true);
      }
    }
  }, []);

  if (isLogged) return <Navigate to="/users" />;

  return (
    <>
      <section>
        <form>
          <label htmlFor="email_input">
            <input
              type="text"
              value={username}
              onChange={({ target: { value } }) => setUsername(value)}
              placeholder="Username"
            />
          </label>
          <label htmlFor="password_input">
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
          <label htmlFor="remember_input">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Permanecer Logado
          </label>
        </form>
        <p>
          Não tem uma conta? <a href="/registration">Inscreva-se</a>
        </p>
      </section>
    </>
  );
}
