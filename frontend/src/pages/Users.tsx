import { useEffect, useState } from "react";
import { UserCard } from "../components";
import { requestUsers } from "../services/requests";
import "../style/Users.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function requestAPI() {
      const users = await requestUsers();
      setUsers(users);
    }
    requestAPI();
  }, []);

  return (
    <section>
      <div className="users_container">
        {users &&
          users.map(
            ({
              name: { first, last },
              dob: { age },
              email,
              picture: { large },
              login: { username },
            }) => {
              return (
                <UserCard
                  thumbnail={large}
                  first={first}
                  last={last}
                  email={email}
                  username={username}
                  age={age}
                />
              );
            }
          )}
      </div>
    </section>
  );
}
