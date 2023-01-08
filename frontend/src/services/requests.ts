import axios from "axios";
import IClient from "../interfaces/IClient";
import ILogin from "../interfaces/ILogin";

const api = axios.create({
  baseURL: `http://localhost:${process.env.API_PORT || "3001"}`,
});

export function setToken(token: string | any) {
  api.defaults.headers.common.Authorization = token;
}

export async function postAPI(endpoint: string, body: ILogin | IClient) {
  const { data } = await api.post(endpoint, body);
  return data;
}

export async function deleteFromDB(clientId: string) {
  await api.delete(`/clients/${clientId}`);
}

export async function requestClients() {
  const { data } = await api.get("clients");
  return data;
}

export async function requestUsers() {
  const fetchApi = await fetch("https://randomuser.me/api/?results=50");
  const { results } = await fetchApi.json();
  return results;
}

export async function requestDogs() {
  const fetchApi = await fetch("https://random.dog/woof.json");
  const { url } = await fetchApi.json();
  return url;
}
