import ActivityList from "@/components/ActivityList";
import useSWR from "swr";

export default function HomePage() {
  const { data: entries, isLoading, error } = useSWR("/api/Entry");
  if (isLoading) return <p>sorting your activities…</p>;

  if (!entries || error) {
    return <h1>Oops… something went wrong.</h1>;
  }
  return (
    <>
      <h1>Hello from Next.js</h1>
      <ActivityList entries={entries} />
    </>
  );
}
