import { useEffect, useState } from "react";
import { requestUsers } from "../services/requests";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function requestAPI() {
      const users = await requestUsers();
      setUsers(users);
    }
    requestAPI();
  }, []);

  return <div>{}</div>;
}
