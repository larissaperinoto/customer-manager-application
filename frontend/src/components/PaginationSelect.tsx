type PaginationSelectProps = {
  usersPerPage: number;
  setUsersPerPage: Function;
};

export default function PaginationSelect({
  usersPerPage,
  setUsersPerPage,
}: PaginationSelectProps) {
  return (
    <div>
      <span>Itens por página</span>
      <select
        value={usersPerPage}
        onChange={(event) =>
          setUsersPerPage(
            Number((event.target as unknown as HTMLTextAreaElement).value)
          )
        }
      >
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
    </div>
  );
}
