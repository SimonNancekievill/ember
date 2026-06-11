import styled, { css } from "styled-components";

export default styled.button`
  cursor: pointer;
  font-size: 16px;
  background-color: #2c2c2c;
  width: 320px;
  height: 40px;
  border-radius: 8px;
  color: #f5f5f5;

  ${(props) =>
    props.$variant === "form" &&
    css`
      width: 272px;
    `};

  ${(props) =>
    props.$variant === "secondary" &&
    css`
      background-color: transparent;
      border: 1px solid #2c2c2c;
      color: #2c2c2c;
    `}
`;
