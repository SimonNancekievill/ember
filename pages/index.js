import ActivityList from "@/components/ActivityList";
import useSWR from "swr";
import { useState } from "react";
import Button from "@/components/Button";
import styled from "styled-components";
import Form from "@/components/Form";

export default function HomePage() {
  const { data: entries, isLoading, error } = useSWR("/api/entries");
  const [isActive, setIsActive] = useState(false);

  if (isLoading) return <p>sorting your activities…</p>;

  if (!entries || error) {
    return <h1>Oops… something went wrong.</h1>;
  }

  return (
    <>
      <h1>Good to see you!</h1>

      {isActive ? (
        <>
          <ButtonWrapper>
            <Button
              type="button"
              aria-label="Opened Activity Form"
              $variant="secondary"
              onClick={() => setIsActive(!isActive)}
            >
              Add new
            </Button>
          </ButtonWrapper>
          <Form />
        </>
      ) : (
        <ButtonWrapper>
          <Button
            type="button"
            aria-label="Open Activity Form"
            onClick={() => setIsActive(!isActive)}
          >
            Add new
          </Button>
        </ButtonWrapper>
      )}

      <ActivityList entries={entries} />
    </>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 48px 0px 48px;
`;
