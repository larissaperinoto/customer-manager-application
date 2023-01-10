import { Button } from "@mui/material";
import { CSSProperties } from "react";

type PaginationProps = {
  setCurrentPage: Function;
  pages: number;
  currentPage: number;
};

export default function Pagination({
  setCurrentPage,
  pages,
  currentPage,
}: PaginationProps) {
  return (
    <>
      {Array.from(Array(pages), (_page, index) => {
        return (
          <Button
            size="small"
            variant="outlined"
            color="inherit"
            value={index}
            style={
              index === currentPage
                ? ({ backgroundColor: "gray" } as CSSProperties)
                : undefined
            }
            onClick={(event) =>
              setCurrentPage(
                Number((event.target as HTMLTextAreaElement).value)
              )
            }
          >
            {index + 1}
          </Button>
        );
      })}
    </>
  );
}
