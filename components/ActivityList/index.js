import ActivityListItem from "../ActivityListItem";
import { Fragment } from "react";
import styled from "styled-components";

export default function ActivityList({
  entries,
  mutateCounter,
  bgColor,
  $errorHeight,
}) {
  if (entries.length === 0) {
    return (
      <StyledPageWrapper $errorHeight>
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
          <Fragment key={entry._id}>
            <ActivityListItem
              name={entry.name}
              date={entry.createdAt}
              category={entry.category}
              id={entry._id}
              mutateCounter={mutateCounter}
              $bgColor={bgColor}
            />
          </Fragment>
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
  height: ${(props) => (props.$errorHeight ? "auto" : "100vh")};
  padding: 24px 48px;
`;
const StyledSubtitle = styled.h2`
  color: var(--tertiary-grey);
  font-weight: 400;
`;
