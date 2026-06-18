import ActivityList from "@/components/ActivityList";
import useSWR from "swr";
import toast from "react-hot-toast";
import { useState } from "react";
import Button from "@/components/Button";
import styled from "styled-components";
import Form from "@/components/Form";
import AffirmationDisplay from "@/components/AffirmationDisplay";
import EntryCounter from "@/components/EntryCounter";
import Calendar from "@/components/Calendar";
import ViewToggle from "../ViewToggle";

export default function HomePage({ affirmation }) {
  const { data: entries, isLoading, error, mutate } = useSWR("/api/entries");
  const { data: entryCount, mutate: mutateCounter } = useSWR("/api/counter");
  const [isActive, setIsActive] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  function handleToggle() {
    setIsToggled(!isToggled);
  }

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
      mutateCounter();
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
    <StyledMainPageWrapper>
      <StyledTitelWrapper>
        <StyledTitle>hi simon,</StyledTitle>
        <AffirmationDisplay affirmation={affirmation} />
      </StyledTitelWrapper>
      <EntryCounter entryCount={entryCount} />

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
      <ViewToggle onToggle={handleToggle} isToggled={isToggled} />
      {isToggled ? (
        <CalendarWrapper>
          <Calendar entries={entries} />
        </CalendarWrapper>
      ) : (
        <ActivityList entries={entries} mutateCounter={mutateCounter} />
      )}
    </StyledMainPageWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 48px 12px 48px;
`;

const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 48px;
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

const CalendarWrapper = styled.div`
  padding: 24px 48px;
`;

const StyledMainPageWrapper = styled.div`
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
