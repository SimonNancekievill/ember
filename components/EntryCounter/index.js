import styled from "styled-components";

export default function EntryCounter({ entryCount }) {
  if (entryCount > 0) {
    return (
      <StyledCardWrapper>
        <StyledCard>
          <StyledSection>
            <StyledTitle>times you chose yourself</StyledTitle>
            <StyledCount>{entryCount}</StyledCount>
          </StyledSection>
        </StyledCard>
      </StyledCardWrapper>
    );
  }
  return;
}

const StyledCardWrapper = styled.div`
  padding: 24px 48px;
`;
const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: fit-content;
  width: 100%;
  gap: 16px;
  border-radius: 8px;
  padding: 16px 32px;
  background-color: var(--primary-white);
`;
const StyledSection = styled.section`
  display: grid;
  column-gap: 12px;
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "title count"
    "title count";
`;
const StyledTitle = styled.h2`
  grid-area: title;
  font-size: 24px;
  font-weight: 500;
`;
const StyledCount = styled.h3`
  grid-area: count;
  font-size: 96px;
  font-weight: 800;
`;
