import { useEffect, useState } from "react";
import { UserCard } from "../components";
import IUser from "../interfaces/IUser";
import { requestUsers } from "../services/requests";
import "../style/Users.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("");

  useEffect(() => {
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
    }
    requestAPI();
  }, []);

  const handleSearch = () => {
    const userFiltered = users.filter(
      (user) => user[`${searchBy}`] === searchTerm
    );
    setUsers(userFiltered);
    setSearchTerm("");
  };

  return (
    <section>
      <div>
        <form>
          <label>
            <input
              type="text"
              placeholder="Insira o termo de busca"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>
          <label>
            Buscar por
            <select onChange={(event) => setSearchBy(event.target.value)}>
              <option value="name" selected>
                Nome
              </option>
              <option value="email">Email</option>
              <option value="username">Username</option>
            </select>
          </label>
          <button type="button" onClick={() => handleSearch()}>
            Buscar
          </button>
        </form>
      </div>
      <div className="users_container">
        {users &&
          users.map(({ name, age, email, thumbnail, username }, index) => {
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
          })}
      </div>
    </section>
  );
}
