import styled from "styled-components";

export default function ViewToggle({ onToggle, isCalendarView }) {
  return (
    <ToggleWrapper>
      <StyledParagraph>{isCalendarView ? "calendar" : "list"}</StyledParagraph>
      <ToggleButton
        onClick={onToggle}
        $view={isCalendarView}
        aria-label={
          isCalendarView ? "Switch to list view" : "Switch to calendar view"
        }
      >
        <Circle $isActive={isCalendarView} />
      </ToggleButton>
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 4px;
  align-items: center;
`;

const StyledParagraph = styled.p`
  color: var(--primary-grey);
`;

const ToggleButton = styled.button`
  width: 40px;
  height: 24px;
  border-radius: 12px;
  border: none;
  background-color: ${(props) =>
    props.$view ? "var(--secondary-orange)" : "var(--primary-orange)"};
  padding: 0;
  position: relative;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--secondary-white);
  border-radius: 50%;
  position: absolute;
  transform: ${(props) =>
    props.$isActive ? "translateX(18px)" : "translateX(2px)"};
  top: 2px;
  transition: transform 0.3s ease;
`;
