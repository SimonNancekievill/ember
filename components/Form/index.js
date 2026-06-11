import styled from "styled-components";
import Button from "../Button";

export default function Form() {
  return (
    <FormWrapper>
      <StyledForm>
        <StyledActivityLabel htmlFor="activity">
          <span>
            Today I managed to:
            <small>*</small>
          </span>
          <input id="activity" name="activity" type="text" required />
        </StyledActivityLabel>
        <StyledCategoryLabel htmlFor="category">
          <span>
            Category
            <small>*</small>
          </span>
          <StyledSelect name="category" required>
            <option value="" selected disabled>
              select a category
            </option>
            <option value="home">Home</option>
            <option value="movement">Movement</option>
            <option value="self care">Self care</option>
          </StyledSelect>
        </StyledCategoryLabel>
        <Button $variant="form">Time spend for me</Button>
      </StyledForm>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  padding: 16px 48px 0px 48px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
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

const StyledCategoryLabel = styled.label`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
const StyledActivityLabel = styled.label`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
