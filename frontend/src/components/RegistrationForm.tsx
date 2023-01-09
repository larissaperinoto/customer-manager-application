import { useState } from "react";

type RegistrationFormProps = {
  handleRegistration: Function;
};

export default function ReistrationForm({
  handleRegistration,
}: RegistrationFormProps) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <h1>Preencha os campos abaixo para cadastrar</h1>
        <label htmlFor="username_input">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label htmlFor="email_input">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label htmlFor="password_input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button
          type="submit"
          onClick={(event) =>
            handleRegistration(event, { username, email, password })
          }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
