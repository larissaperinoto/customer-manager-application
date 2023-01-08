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
    <div>
      {Array.from(Array(pages), (_page, index) => {
        return (
          <button
            value={index}
            style={
              index === currentPage
                ? ({ backgroundColor: "blue" } as CSSProperties)
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
    </div>
  );
}
