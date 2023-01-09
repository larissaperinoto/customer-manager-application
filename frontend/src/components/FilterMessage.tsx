type FilterMessageProps = {
  filter: string;
  requestAPI: Function;
};

export default function FilterMessage({
  filter,
  requestAPI,
}: FilterMessageProps) {
  return (
    <div>
      {filter && (
        <button type="button" onClick={() => requestAPI()}>
          {filter}
        </button>
      )}
    </div>
  );
}
