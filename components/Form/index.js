import styled from "styled-components";
import Button from "../Button";

export default function Form() {
  return (
    <StyledForm>
      <label htmlFor="activity">
        Today I manged to:
        <input id="activity" name="activity" type="text" required />
      </label>
      <label htmlFor="category">
        Category
        <StyledSelect name="category" required>
          <option value="">select a category</option>
          <option value="home">Home</option>
          <option value="movement">Movement</option>
          <option value="self care">Self care</option>
        </StyledSelect>
      </label>
      <Button $variant="form">Time spend for me</Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 276px;
  width: 320px;
  gap: 24px;
  border-radius: 8px;
  padding: 24px;
  background-color: #fff;
`;

const StyledSelect = styled.select`
  border-radius: 8px;
  padding: 8px 16px;
  border: none;
  background-color: #f5f5f5;
`;
