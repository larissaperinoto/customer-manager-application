import { Button, Container } from "@mui/material";

type FilterMessageProps = {
  filter: string;
  requestAPI: Function;
};

export default function FilterMessage({
  filter,
  requestAPI,
}: FilterMessageProps) {
  return (
    <Container sx={{ mt: 1, mb: 2 }}>
      {filter && (
        <Button
          type="button"
          color="success"
          variant="text"
          onClick={() => requestAPI()}
        >
          {filter}
        </Button>
      )}
    </Container>
  );
}
