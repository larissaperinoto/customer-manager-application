import IClient from "../interfaces/IClient";
import "../style/ClientCard.css";

export default function ClientCard({
  name,
  email,
  phoneNumber,
  address,
  cpf,
}: IClient) {
  return (
    <div className="client_card">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <p>{address}</p>
      <p>{cpf}</p>
    </div>
  );
}
