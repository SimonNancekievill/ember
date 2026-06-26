import { useState } from "react";
import styled, { css } from "styled-components";
import Button from "@/components/Button";

const slides = [
  {
    title: "welcome to ember",
    body: "this is a quiet place to notice  when you're taking care of yourself. no streaks to chase. no guilt if you  miss a day. just a simple way to  see that you showed up for yourself.",
    bubble: "top-right",
  },
  {
    title: "log what you do",
    body: "exercise. meditation. cleaning your  room. calling a friend. anything that  feels like choosing yourself. pick a category. give it a name.  that's it.",
    bubble: "bottom-left",
  },
  {
    title: "times you chose yourself",
    body: "every activity adds to your counter.  not to pressure you. just to remind  you that these moments matter.",
    bubble: "top-left",
  },
];

export default function Onboarding({ onComplete }) {
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
    <StyledPageWrapper>
      <LeftZone onClick={goBack} />
      <RightZone onClick={advance} />
      <Bubble $position={slides[currentSlide].bubble} />
      <StyledTitle>{slides[currentSlide].title}</StyledTitle>
      <StyledBody>{slides[currentSlide].body}</StyledBody>
      <Dots>
        {slides.map((slide, index) => (
          <Dot key={index} $active={index === currentSlide} />
        ))}
      </Dots>
      <SkipButton
        $variant="cancel"
        onClick={(event) => {
          event.stopPropagation();
          onComplete();
        }}
      >
        skip
      </SkipButton>
    </StyledPageWrapper>
  );
}

const StyledPageWrapper = styled.div`
  position: relative;
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

const Dots = styled.div`
  position: absolute;
  bottom: 52px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;
const Dot = styled.div`
  height: 4px;
  width: ${(props) => (props.$active ? "24px" : "8px")};
  background-color: ${(props) =>
    props.$active ? "var(--primary-orange)" : "var(--tertiary-grey)"};
  border-radius: 4px;
  transition: all 0.8s ease;
`;

const Bubble = styled.div`
  position: fixed;
  width: 350px;
  height: 350px;
  background-color: var(--primary-orange);
  transition: all 0.8s ease;

  ${(props) =>
    props.$position === "top-right" &&
    css`
      top: -100px;
      right: -150px;
      border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
    `};
  ${(props) =>
    props.$position === "bottom-left" &&
    css`
      bottom: -150px;
      left: -200px;
      border-radius: 40% 60% 30% 70% / 60% 40% 50% 50%;
    `};
  ${(props) =>
    props.$position === "top-left" &&
    css`
      top: -100px;
      left: -50px;
      border-radius: 40% 60% 30% 70% / 60% 40% 50% 50%;
    `};
`;
const SkipButton = styled(Button)`
  position: absolute;
  bottom: 48px;
  right: 48px;
  width: auto;
  height: auto;
  color: var(--tertiary-grey);
  z-index: 10;
`;

const LeftZone = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
`;

const RightZone = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
`;
