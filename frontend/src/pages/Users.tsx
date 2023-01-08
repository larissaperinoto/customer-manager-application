import { useEffect, useState } from "react";
import { UserCard, SearchForm } from "../components";
import IUser from "../interfaces/IUser";
import { requestUsers } from "../services/requests";
import "../style/Users.css";

export default function Users() {
  const [users, setUsers] = useState([] as any[]);

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

  const handleSearch = (searchBy: string, searchTerm: string) => {
    const userFiltered = users.filter((user) =>
      user[`${searchBy}`].includes(searchTerm)
    );
    setUsers(userFiltered);
  };

  return (
    <section>
      <div className="filter_container">
        <SearchForm handleSearch={handleSearch} />
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
