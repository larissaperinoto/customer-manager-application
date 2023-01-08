import IClient from "../interfaces/IClient";
import "../style/ClientCard.css";

type ClientCardProps = {
  client: IClient;
  handleDeleteClient: Function;
};

export default function ClientCard({
  client,
  handleDeleteClient,
}: ClientCardProps | any) {
  const { _id, name, email, phoneNumber, address, cpf } = client;

  return (
    <div className="client_card">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <p>{address}</p>
      <p>{cpf}</p>
      <div>
        <button
          type="submit"
          onClick={(event) => handleDeleteClient(event, _id)}
        >
          Deletar
        </button>
      </div>
    </div>
  );
}
