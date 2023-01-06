import IUser from "../interfaces/IUser";
import "../style/UserCard.css";

export default function UserCard({
  thumbnail,
  first,
  last,
  email,
  username,
  age,
}: IUser) {
  return (
    <div className="user_card">
      <img src={thumbnail} alt={`${first} ${last}`} />
      <h3>{`${first} ${last}`}</h3>
      <p>{email}</p>
      <p>{username}</p>
      <p>{age}</p>
    </div>
  );
}
