import ActivityListItem from "../ActivityListItem";
import styled from "styled-components";

export default function ActivityList({ entries }) {
  return (
    <StyledList>
      {entries.map((entry) => {
        const { activities } = entry;
        return activities.map((activity) => {
          return (
            <ActivityListItem
              activity={activity}
              date={entry.createdAt}
              key={activity.name}
            />
          );
        });
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
