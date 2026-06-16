import styled from "styled-components";
import useAffiramtion from "@/hooks/useAffirmation";

export default function AffirmationDisplay() {
  const { affirmation, isLoading } = useAffiramtion();
  if (isLoading) {
    return <StyledSubtitle>loading…</StyledSubtitle>;
  }
  return <StyledSubtitle>{affirmation}</StyledSubtitle>;
}

const StyledSubtitle = styled.h2`
  color: var(--tertiary-grey);
  font-weight: 400;
`;
