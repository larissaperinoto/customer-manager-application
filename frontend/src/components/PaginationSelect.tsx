import { MenuItem, Select, Typography } from "@mui/material";

type PaginationSelectProps = {
  usersPerPage: number;
  setUsersPerPage: Function;
};

const itensPerPage = [10, 15, 20, 25];

export default function PaginationSelect({
  usersPerPage,
  setUsersPerPage,
}: PaginationSelectProps) {
  return (
    <>
      <Typography variant="body1" textAlign="center">
        Itens por página
      </Typography>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        size="small"
        value={usersPerPage}
        onChange={(event) =>
          setUsersPerPage(
            Number((event.target as unknown as HTMLTextAreaElement).value)
          )
        }
      >
        {itensPerPage.map((number) => (
          <MenuItem value={number}>{number}</MenuItem>
        ))}
      </Select>
    </>
  );
}
