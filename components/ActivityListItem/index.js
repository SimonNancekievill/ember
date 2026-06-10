import styled from "styled-components";
import Image from "next/image";

export default function ActivityListItem({ activity }) {
  return (
    <StyledItem key={activity.name}>
      <h2>{activity.name}</h2>
      <StyledSection>
        <p>{activity.category}</p>
      </StyledSection>
    </StyledItem>
  );
}

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 160px;
  gap: 16px;
  border-radius: 8px;
  padding: 8px 32px;
  background-color: #fff;
`;

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
