import ActivityListItem from "../ActivityListItem";
import { Fragment } from "react";
import styled from "styled-components";

export default function ActivityList({ entries }) {
  if (entries.length === 0) {
    return <p>nothing logged yet — that is okay, today is a new day</p>;
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
