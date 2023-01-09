import IUserCard from "../interfaces/IUserCard";
import "../style/UserCard.css";

export default function UserCard({
  thumbnail,
  name,
  email,
  username,
  age,
}: IUserCard) {
  return (
    <div className="user_card">
      <img src={thumbnail} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{username}</p>
      <p>{`Idade: ${age}`}</p>
    </div>
  );
}
