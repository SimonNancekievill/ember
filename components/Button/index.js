import styled, { css } from "styled-components";

export default styled.button`
  cursor: pointer;
  font-size: 16px;
  background-color: var(--primary-orange);
  border: none;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  color: var(--secondary-white);

  ${(props) =>
    props.$variant === "secondary" &&
    css`
      background-color: transparent;
      border: 1px solid var(--primary-button);
      color: var(--primary-button);
    `}

  ${(props) =>
    props.$variant === "dots" &&
    css`
      position: absolute;
      top: 16px;
      right: 16px;
      background-color: transparent;
      border: none;
      color: #2c2c2c;
      width: auto;
      height: auto;
      font-size: 19px;
    `}

    ${(props) =>
    props.$variant === "cancel" &&
    css`
      background-color: transparent;
      border: none;
      color: var(--primary-grey);
    `}

    ${(props) =>
    props.$variant === "filter" &&
    css`
      border-radius: 8px;
      height: 24px;
      width: auto;
      border: none;
      background-color: ${(props) =>
        props.$active ? "var(--tertiary-grey)" : "var(--another-grey)"};
      color: var(--primary-grey);
      font-size: 12px;
    `}
`;
