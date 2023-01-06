import IUser from "../interfaces/IUser";

export default function UserCard({
  thumbnail,
  first,
  last,
  email,
  username,
  age,
}: IUser) {
  return (
    <div>
      <img src={thumbnail} alt={`${first} ${last}`} />
      <h3>{`${first} ${last}`}</h3>
      <p>{email}</p>
      <p>{username}</p>
      <p>{age}</p>
    </div>
  );
}
