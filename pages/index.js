import ActivityList from "@/components/ActivityList";
import useSWR from "swr";
import toast from "react-hot-toast";
import { useState } from "react";
import Button from "@/components/Button";
import styled from "styled-components";
import Form from "@/components/Form";

export default function HomePage() {
  const { data: entries, isLoading, error, mutate } = useSWR("/api/entries");
  const [isActive, setIsActive] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const entryData = {
      name: formData.get("name"),
      category: formData.get("category"),
    };

    const response = await fetch("/api/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entryData),
    });

    if (response.ok) {
      mutate();
      setIsActive(!isActive);
      toast.success("Successfully created your Activity.");
      event.target.reset();
    } else {
      toast.error("Something went wrong, please try again.");
    }
  }

  if (isLoading)
    return (
      <StyledPageWrapper>
        <StyledSubtitle>sorting your activities…</StyledSubtitle>
      </StyledPageWrapper>
    );

  if (!entries || error) {
    return (
      <StyledPageWrapper>
        <StyledSubtitle>Oops… something went wrong.</StyledSubtitle>
      </StyledPageWrapper>
    );
  }

  return (
    <>
      <StyledTitelWrapper>
        <StyledTitle>hi simon,</StyledTitle>
        <StyledSubtitle>good to see you!</StyledSubtitle>
      </StyledTitelWrapper>

      {isActive ? (
        <>
          <ButtonWrapper>
            <Button
              type="button"
              aria-label="Close Activity Form"
              $variant="cancel"
              onClick={() => setIsActive(!isActive)}
            >
              Close
            </Button>
          </ButtonWrapper>
          <Form onSubmit={handleSubmit} />
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

const StyledTitle = styled.h1`
  font-weight: 500;
`;
const StyledSubtitle = styled.h2`
  color: var(--tertiary-grey);
  font-weight: 400;
`;

const StyledTitelWrapper = styled.div`
  padding: 24px 48px;
`;

const StyledPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
