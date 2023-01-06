import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
          <button type="submit">Entrar</button>
        </form>
      </section>
    </>
  );
}
