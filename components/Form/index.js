import styled from "styled-components";
import Button from "../Button";

export default function Form({ onSubmit, isEditMode, name, category }) {
  return (
    <FormWrapper $isEditMode={isEditMode}>
      <StyledForm onSubmit={onSubmit} $isEditMode={isEditMode}>
        <StyledActivityLabel htmlFor="name">
          <span>
            Today I managed to:
            <small>*</small>
          </span>
          <StyledTextInput
            id="name"
            name="name"
            type="text"
            placeholder="brushed my teeth"
            defaultValue={name}
            required
          />
        </StyledActivityLabel>
        <StyledCategoryLabel htmlFor="category">
          <span>
            Category
            <small>*</small>
          </span>
          <StyledSelect
            id="category"
            name="category"
            defaultValue={category}
            required
          >
            <option value="">select a category</option>
            <option value="self care">Self care</option>
            <option value="movement">Movement</option>
            <option value="social">Social</option>
            <option value="home">Home</option>
          </StyledSelect>
        </StyledCategoryLabel>
        {isEditMode ? (
          <Button>save & close</Button>
        ) : (
          <Button>Time spent for me</Button>
        )}
      </StyledForm>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  padding: ${(props) => (props.$isEditMode ? "0" : "16px 48px 0px 48px")};
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: ${(props) => (props.$isEditMode ? "auto" : "276px")};
  width: 100%;
  gap: 24px;
  border-radius: 8px;
  padding: 24px;
  background-color: var(--primary-white);
  border: ${(props) => (props.$isEditMode ? "1px solid #d9d9d9" : "none")};
`;

const StyledTextInput = styled.input`
  border-radius: 8px;
  padding: 8px 16px;
  border: 1px solid var(--tertiary-grey);
  width: 100%;
  font-size: 16px;
`;

const StyledSelect = styled.select`
  border-radius: 8px;
  padding: 8px 16px;
  border: 1px solid var(--tertiary-grey);
  width: 100%;
  font-size: 16px;
  background-color: transparent;
`;

const StyledCategoryLabel = styled.label`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 100%;
`;
const StyledActivityLabel = styled.label`
  display: flex;
  gap: 8px;
  width: 100%;
  flex-direction: column;
`;
