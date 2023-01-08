import { createContext } from "react";
import IClientsContext from "../interfaces/IClientsContext";

const ClientsContext = createContext({} as IClientsContext);

export default ClientsContext;
