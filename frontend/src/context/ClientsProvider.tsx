import { ReactNode } from "react";
import ClientsContext from "./ClientsContext";

export default function ClientsProvider({ children }: { children: ReactNode }) {
  const value = {};

  return (
    <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>
  );
}
