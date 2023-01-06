import axios from "axios";
import ILogin from "../interfaces/ILogin";

console.log(process.env.API_PORT);

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
