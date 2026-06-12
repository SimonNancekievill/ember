import styled from "styled-components";
import Button from "../Button";
import { useState } from "react";
import useSWR from "swr";
import toast from "react-hot-toast";
import Form from "../Form";

export default function BottomSheet({ onClose, id, name, category }) {
  const { mutate } = useSWR("/api/entries");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  async function handleDeleteActivity() {
    const response = await fetch(`/api/entries/${id}`, { method: "DELETE" });
    if (response.ok) {
      mutate();
      onClose();
      toast.success("Successfully deleted your Activity.");
    } else {
      toast.error("Something didn't work, try again… ");
    }
  }

  async function handleEditActivity() {}

  return (
    <Overlay onClick={onClose}>
      <Sheet
        $expandedMid={confirmDelete}
        $expandedLarge={isEditMode}
        onClick={(event) => event.stopPropagation()}
      >
        {confirmDelete ? (
          <StyledWrapper>
            <StyledParagraph>
              do you really want to delete your activtiy?
            </StyledParagraph>
            <ButtonWrapper>
              <Button onClick={handleDeleteActivity}>delete</Button>
              <Button
                $variant="cancel"
                onClick={() => setConfirmDelete(!confirmDelete)}
              >
                cancel
              </Button>
            </ButtonWrapper>
          </StyledWrapper>
        ) : isEditMode ? (
          <StyledWrapper>
            <Form
              $isEditMode
              name={name}
              category={category}
              onSubmit={handleEditActivity}
            />
            <ButtonWrapper>
              <Button $variant="secondary">save & close</Button>
              <Button onClick={() => setIsEditMode(!isEditMode)}>cancel</Button>
            </ButtonWrapper>
          </StyledWrapper>
        ) : (
          <ButtonWrapper>
            <Button
              $variant="secondary"
              onClick={() => setIsEditMode(!isEditMode)}
            >
              edit
            </Button>
            <Button onClick={() => setConfirmDelete(!confirmDelete)}>
              delete
            </Button>
          </ButtonWrapper>
        )}
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
  height: ${(props) =>
    props.$expandedMid ? "220px" : props.$expandedLarge ? "440px" : "140px"};
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 48px 24px 48px;
  border-radius: 16px 16px 0px 0px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const StyledParagraph = styled.p`
  color: #757575;
`;
