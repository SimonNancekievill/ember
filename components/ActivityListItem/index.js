import styled from "styled-components";
import Image from "next/image";

export default function ActivityListItem({ activity, date }) {
  const formatedDate = new Date(date).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <StyledItem key={activity.name}>
      <StyledName>{activity.name}</StyledName>
      <StyledSection>
        <StyledImage width={48} height={48} alt="placeholder" />
        <StyledDate>{formatedDate}</StyledDate>
        <StyledCategory>{activity.category}</StyledCategory>
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
  margin-top: 16px;
  column-gap: 12px;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "image date"
    "image category";
`;

const StyledName = styled.h2`
  font-weight: 500;
`;

const StyledDate = styled.p`
  grid-area: date;
  font-weight: bold;
  color: #757575;
  line-height: 0.9;
`;
const StyledImage = styled(Image)`
  grid-area: image;
  background-color: #e6e6e6;
  border-radius: 50%;
`;

const StyledCategory = styled.p`
  grid-area: category;
  color: #b3b3b3;
  line-height: 0.9;
`;
