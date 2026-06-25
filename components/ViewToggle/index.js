import styled from "styled-components";
import Button from "@/components/Button";

export default function ViewToggle({ onToggle, isCalendarView }) {
  return (
    <ButtonWrapper>
      <Button
        $variant="view"
        onClick={() => !isCalendarView && onToggle()}
        $active={!isCalendarView}
        aria-label="Switch to list view"
      >
        List
      </Button>
      <Button
        $variant="view"
        onClick={() => isCalendarView && onToggle()}
        $active={isCalendarView}
        aria-label="Switch to calendar view"
      >
        Calendar
      </Button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  width: 100%;
  height: 24px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 4px;
  align-items: center;
`;
