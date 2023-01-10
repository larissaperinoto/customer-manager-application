import { Typography, Card, Grid } from "@mui/material";
import IUserCard from "../interfaces/IUserCard";

export default function UserCard({
  thumbnail,
  name,
  email,
  username,
  age,
}: IUserCard) {
  return (
    <Grid item>
      <Card sx={{ padding: 4, textAlign: "center" }}>
        <img src={thumbnail} alt={name} />
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ fontSize: 20, fontWeight: 600 }}
        >
          {name}
        </Typography>
        <Typography variant="body1" textAlign="center">
          {email}
        </Typography>
        <Typography variant="body1" textAlign="center">
          {username}
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
        >{`Idade: ${age}`}</Typography>
      </Card>
    </Grid>
  );
}
