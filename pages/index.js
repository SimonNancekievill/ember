import ActivityList from "@/components/ActivityList";
import useSWR from "swr";
import toast from "react-hot-toast";
import { useState } from "react";
import Button from "@/components/Button";
import styled from "styled-components";
import Form from "@/components/Form";

export default function HomePage() {
  const { data: entries, isLoading, error } = useSWR("/api/entries");
  const [isActive, setIsActive] = useState(false);
  const { mutate } = useSWR("/api/entries");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const entryData = {
      activities: [
        {
          name: formData.get("activity"),
          category: formData.get("category"),
        },
      ],
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
      toast.success("Successfully created your Activity.");
      event.target.reset();
    } else {
      toast.error("Something went wrong, just try again.");
    }
  }

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
