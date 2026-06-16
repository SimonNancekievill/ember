import styled from "styled-components";
import { useState, useEffect } from "react";

export default function AffirmationDisplay() {
  const [affirmation, setAffirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadAffirmation() {
      const today = new Date().toISOString().split("T")[0];
      const cached = localStorage.getItem(`affirmation${today}`);

      if (cached) {
        setAffirmation(cached);
        setIsLoading(false);
      } else {
        try {
          const response = await fetch("/api/affirmation");
          const data = await response.json();
          const newAffirmation = data.affirmation;
          setAffirmation(newAffirmation);
          localStorage.setItem(`affirmation${today}`, newAffirmation);
          setIsLoading(false);
        } catch (error) {
          console.error("Failed to fetch affirmation", error);
          setAffirmation("glad you are here");
          setIsLoading(false);
        }
      }
    }
    loadAffirmation();
  }, []);

  if (isLoading) {
    return <StyledSubtitle>loading…</StyledSubtitle>;
  }
  return <StyledSubtitle>{affirmation}</StyledSubtitle>;
}

const StyledSubtitle = styled.h2`
  color: var(--tertiary-grey);
  font-weight: 400;
`;
