import styled from "styled-components";
import Image from "next/image";
import Button from "../Button";
import { useState } from "react";
import BottomSheet from "../BottomSheet";

export default function ActivityListItem({
  name,
  date,
  category,
  id,
  mutateCounter,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const formattedDate = new Date(date).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function getCategoryColor(category) {
    switch (category) {
      case "movement":
        return "var(--movement-yellow)";
      case "home":
        return "var(--home-indigo)";
      case "self care":
        return "var(--selfcare-mint)";
      case "social":
        return "var(--social-pink)";
      default:
        return "var(--other-grey)";
    }
  }

  return (
    <StyledItem>
      <Button
        $variant="dots"
        aria-label="Open options"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ...
      </Button>
      {menuOpen && (
        <BottomSheet
          id={id}
          name={name}
          category={category}
          onClose={() => setMenuOpen(false)}
          mutateCounter={mutateCounter}
        />
      )}
      <StyledName>{name}</StyledName>
      <StyledSection>
        <StyledCircle $color={getCategoryColor(category)} />
        <StyledDate>{formattedDate}</StyledDate>
        <StyledCategory>{category}</StyledCategory>
      </StyledSection>
    </StyledItem>
  );
}

const StyledItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 147px;
  width: 100%;
  gap: 16px;
  border-radius: 8px;
  padding: 16px 32px;
  background-color: var(--tertinary-white);
`;

const StyledSection = styled.section`
  display: grid;
  margin-top: 16px;
  column-gap: 12px;
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "circle date"
    "circle category";
`;

const StyledName = styled.h2`
  font-weight: 600;
`;

const StyledDate = styled.p`
  grid-area: date;
  font-weight: bold;
  color: var(--secondary-grey);
  line-height: 0.9;
`;

const StyledCircle = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  grid-area: circle;
  background-color: ${(props) => props.$color};
`;

const StyledCategory = styled.p`
  grid-area: category;
  color: var(--tertiary-grey);
  line-height: 0.9;
`;
