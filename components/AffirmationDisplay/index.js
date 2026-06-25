import styled from "styled-components";

export default function AffirmationDisplay({ affirmation }) {
  return <StyledSubtitle>{affirmation}</StyledSubtitle>;
}

const StyledSubtitle = styled.h2`
  color: var(--secondary-grey);
  font-weight: 400;
`;
