import { CSSProperties } from "react";
import "../style/Pagination.css";

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
          <button
            color="inherit"
            value={index}
            className="pagination_button"
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
          </button>
        );
      })}
    </>
  );
}
