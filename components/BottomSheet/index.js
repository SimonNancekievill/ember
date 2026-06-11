import styled from "styled-components";
import Button from "../Button";

export default function ButtomSheet({ onClose }) {
  return (
    <Overlay onClick={onClose}>
      <Sheet onClick={(event) => event.stopPropagation()}>
        <Button>delete</Button>
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
  background-color: hsl(0 0% 12% / 0.4);
`;

const Sheet = styled.div`
  position: fixed;
  z-index: 11;
  background-color: #fff;
  height: 140px;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 48px 24px 48px;
  border-radius: 16px 16px 0px 0px;
`;
