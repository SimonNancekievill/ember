import styled from "styled-components";
import { useState } from "react";
import ActivityList from "../ActivityList";

export default function DayDetailSheet({ activities, onClose }) {
  const [selectedActivities, setSelectedActivities] = useState(null);

  return (
    <Overlay onClick={onClose}>
      <Sheet onClick={(event) => event.stopPropagation()}>
        <StyledBar />
        <ActivityList entries={activities} />
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
  height: 440px;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 48px 24px 48px;
  border-radius: 16px 16px 0px 0px;
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
