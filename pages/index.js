import ActivityList from "@/components/ActivityList";
import useSWR from "swr";
import Button from "@/components/Button";
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
      <ButtonWrapper>
        <Button type="button" aria-label="Open Activity Form">
          Add new
        </Button>
      </ButtonWrapper>
      <ActivityList entries={entries} />
    </>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 48px 0px 48px;
`;
