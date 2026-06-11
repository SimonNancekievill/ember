import ActivityList from "@/components/ActivityList";
import useSWR from "swr";
import styled from "styled-components";

export default function HomePage() {
  const { data: entries, isLoading, error } = useSWR("/api/entries");

  if (isLoading) return <p>sorting your activities…</p>;

  if (!entries || error) {
    return <h1>Oops… something went wrong.</h1>;
  }

  return (
    <>
      <h1>Good to see you!</h1>
      <ActivityList entries={entries} />
    </>
  );
}
