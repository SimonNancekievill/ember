import ActivityListItem from "../ActivityListItem";
import styled from "styled-components";

export default function ActivityList({ entries, mutateCounter, $compact }) {
  if (entries.length === 0) {
    return (
      <StyledPageWrapper $compact={$compact}>
        <StyledSubtitle>
          nothing logged yet — that is okay, today is a new day
        </StyledSubtitle>
      </StyledPageWrapper>
    );
  }
  return (
    <StyledList>
      {entries.map((entry) => {
        return (
          <ActivityListItem
            key={entry._id}
            name={entry.name}
            date={entry.createdAt}
            category={entry.category}
            id={entry._id}
            mutateCounter={mutateCounter}
          />
        );
      })}
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 24px 48px;
  gap: 24px;
`;
const StyledPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(props) => (props.$compact ? "auto" : "100vh")};
  padding: 24px 48px;
`;
const StyledSubtitle = styled.h2`
  color: var(--tertiary-grey);
  font-weight: 400;
`;
