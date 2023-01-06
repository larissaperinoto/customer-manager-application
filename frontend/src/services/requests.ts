import axios from "axios";
import ILogin from "../interfaces/ILogin";

const api = axios.create({
  baseURL: `http://localhost:${process.env.API_PORT || "3001"}`,
});

export function setToken(token: string | any) {
  api.defaults.headers.common.Authorization = token;
}

export async function requestLogin(endpoint: string, body: ILogin) {
  const { data } = await api.post(endpoint, body);
  return data;
}

export async function requestUsers() {
  const fetchApi = await fetch("https://randomuser.me/api/?results=50");
  const { results } = await fetchApi.json();
  return results;
}
