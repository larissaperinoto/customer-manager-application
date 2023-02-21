import axios from "axios";
import IClient from "../interfaces/ICustomer";
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

export async function deleteFromDB(customerId: string) {
  await api.delete(`/customers/${customerId}`);
}

export async function updateAPI(customerId: string, body: IClient) {
  await api.put(`/customers/${customerId}`, body);
}

export async function requestCustomers() {
  const { data } = await api.get("customers");
  return data;
}

export async function requestUsers() {
  const fetchApi = await fetch("https://randomuser.me/api/?results=50");
  const { results } = await fetchApi.json();
  return results;
}
