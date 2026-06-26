import { useState } from "react";
import styled from "styled-components";
import Button from "@/components/Button";

const slides = [
  {
    title: "welcome",
    body: "this is a quiet place to notice  when you're taking care of yourself. no streaks to chase. no guilt if you  miss a day. just a simple way to  see that you showed up for yourself.",
  },
  {
    title: "log what you do",
    body: "exercise. meditation. cleaning your  room. calling a friend. anything that  feels like choosing yourself. pick a category. give it a name.  that's it.",
  },
  {
    title: "times you chose yourself",
    body: "every activity adds to your counter.  not to pressure you. just to remind  you that these moments matter.",
  },
];

export default function Onboarding({ onComplete }) {
  console.log("onComplete:", onComplete);
  const [currentSlide, setCurrentSlide] = useState(0);

  function advance() {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  }
  function goBack() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  return (
    <StyledPageWrapper onClick={advance}>
      <Button
        $variant="cancel"
        onClick={(event) => {
          event.stopPropagation();
          onComplete();
        }}
      >
        skip
      </Button>
      <StyledTitle>{slides[currentSlide].title}</StyledTitle>
      <StyledBody>{slides[currentSlide].body}</StyledBody>
      <Bar />
    </StyledPageWrapper>
  );
}

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px 48px;
  width: 100%;
  height: 100vh;
`;
const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 48px;
`;

const StyledBody = styled.p`
  color: var(--tertiary-grey);
  font-size: 24px;
  font-weight: 400;
`;

const Bar = styled.div`
  width: 40px;
  height: 4px;
  background-color: var(--tertiary-grey);
  border-radius: 4px;
`;
