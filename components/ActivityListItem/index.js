import styled from "styled-components";
import Image from "next/image";
import Button from "../Button";
import { useState } from "react";
import BottomSheet from "../BottomSheet";

export default function ActivityListItem({ name, date, category, id }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const formattedDate = new Date(date).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <StyledItem>
      <Button $variant="dots" onClick={() => setMenuOpen(!menuOpen)}>
        ...
      </Button>
      {menuOpen && <BottomSheet id={id} onClose={() => setMenuOpen(false)} />}
      <StyledName>{name}</StyledName>
      <StyledSection>
        <StyledImage
          src="/images/placeholder.png"
          width={48}
          height={48}
          alt="placeholder"
        />
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
  height: 147px;
  width: 320px;
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
