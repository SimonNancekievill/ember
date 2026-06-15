import useSWR from "swr";

export default function EntryCounter() {
  const { data: entryCount } = useSWR("/api/counter");

  return (
    <div>
      <h2>{entryCount}</h2>
    </div>
  );
}
