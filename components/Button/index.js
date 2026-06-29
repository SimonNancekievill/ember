import styled, { css } from "styled-components";

export default styled.button`
  cursor: pointer;
  font-size: 16px;
  background-color: var(--primary-orange);
  border: none;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  color: var(--secondary-white);

  ${(props) =>
    props.$variant === "secondary" &&
    css`
      background-color: transparent;
      border: 1px solid var(--primary-orange);
      color: var(--primary-orange);
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
    props.$variant === "options" &&
    css`
      border-radius: 8px;
      height: auto;
      width: auto;
      padding: 4px 12px;
      background-color: transparent;
      border: solid 1px;
      border-color: ${(props) =>
        props.$active ? "var(--primary-grey)" : "var(--tertiary-grey)"};
      color: ${(props) =>
        props.$active ? "var(--secondary-grey)" : "var(--tertiary-grey)"};
    `}
    ${(props) =>
    props.$variant === "view" &&
    css`
      border-radius: 8px;
      height: auto;
      width: auto;
      padding: 4px 12px;
      background-color: ${(props) =>
        props.$active ? "var(--primary-orange)" : "var(--another-grey)"};
      color: ${(props) =>
        props.$active ? "var(--secondary-white)" : "var(--secondary-grey)"};
    `}
    ${(props) =>
    props.$variant === "signOut" &&
    css`
      background-color: transparent;
      border: 1px solid var(--secondary-grey);
      color: var(--secondary-grey);
      padding: 4px 12px;
      height: auto;
      width: auto;
    `}

    ${(props) =>
    props.$variant === "signIn" &&
    css`
      display: flex;
      flex-direction: row;
      gap: 15px;
      align-items: center;
      justify-content: center;
    `}
`;
