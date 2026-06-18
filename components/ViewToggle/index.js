import styled from "styled-components";

export default function ViewToggle({ onToggle, isToggled }) {
  return (
    <ToggleWrapper>
      <p>{isToggled ? "calendar" : "list"}</p>
      <ToggleButton onClick={onToggle} $view={isToggled}>
        <Circle $isActive={isToggled} />
      </ToggleButton>
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px 0px 48px;
`;

const ToggleButton = styled.button`
  width: 40px;
  height: 24px;
  border-radius: 12px;
  border: none;
  background-color: ${(props) =>
    props.$view ? "var(--secondary-grey)" : "var(--tertiary-grey)"};
  padding: 0;
  position: relative;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--primary-white);
  border-radius: 50%;
  position: absolute;
  left: ${(props) => (props.$isActive ? "18px" : "2px")};
  top: 2px;
  transition: left 0.3s ease;
`;
