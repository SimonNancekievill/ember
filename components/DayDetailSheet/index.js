import styled from "styled-components";
import ActivityList from "../ActivityList";

export default function DayDetailSheet({
  date,
  activities,
  onClose,
  mutateCounter,
}) {
  return (
    <Overlay onClick={onClose}>
      <Sheet onClick={(event) => event.stopPropagation()}>
        <StyledBar />
        <SheetContent>
          <DateHeader>
            {date.toLocaleDateString("de-DE", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </DateHeader>
          <ActivityList
            entries={activities}
            $compact
            mutateCounter={mutateCounter}
          />
        </SheetContent>
      </Sheet>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  left: 0;
  bottom: 0;
  background-color: var(--overlay-bg);
`;

const Sheet = styled.div`
  position: fixed;
  z-index: 11;
  background-color: var(--primary-white);
  max-height: 50vh;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 16px 16px 0px 0px;
`;

const SheetContent = styled.div`
  width: 100%;
  overflow-y: auto;
  margin-top: 16px;
`;

const StyledBar = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 4px;
  background-color: var(--tertiary-grey);
  border-radius: 4px;
`;
const DateHeader = styled.h3`
  margin: 24px 48px;
  font-size: 16px;
  color: var(--secondary-grey);
`;
