import { useEffect, useState } from "react";
import { requestClients, setToken } from "../services/requests";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function requestAPI() {
      const token = localStorage.getItem("token");
      setToken(token);
      const clients = await requestClients();
      setClients(clients);
    }
    requestAPI();
  }, []);

  return <div></div>;
}
