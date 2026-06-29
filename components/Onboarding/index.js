import { useState } from "react";
import styled from "styled-components";
import Button from "@/components/Button";
import { motion } from "motion/react";

const slides = [
  {
    title: "welcome to ember",
    body: "this is a quiet place to notice  when you're taking care of yourself. no streaks to chase. no guilt if you  miss a day. just a simple way to  see that you showed up for yourself.",
    bubble: {
      x: "calc(100vw - 200px)",
      y: -100,
      borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
    },
  },
  {
    title: "log what you do",
    body: "exercise. meditation. cleaning your  room. calling a friend. anything that  feels like choosing yourself. pick a category. give it a name.  that's it.",
    bubble: {
      x: -200,
      y: "calc(100vh - 200px)",
      borderRadius: "40% 60% 30% 70% / 60% 40% 50% 50%",
    },
  },
  {
    title: "times you chose yourself",
    body: "every activity adds to your counter.  not to pressure you. just to remind  you that these moments matter.",
    bubble: {
      x: -50,
      y: -100,
      borderRadius: "40% 60% 30% 70% / 60% 40% 50% 50%",
    },
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
      <LeftZone onClick={goBack} aria-label="previous slide" />
      <RightZone onClick={advance} aria-label="next slide" />
      <Bubble
        animate={{
          x: slides[currentSlide].bubble.x,
          y: slides[currentSlide].bubble.y,
          borderRadius: slides[currentSlide].bubble.borderRadius,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
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
  z-index: 10;
`;

const StyledBody = styled.p`
  color: var(--tertiary-grey);
  font-size: 24px;
  font-weight: 400;
  z-index: 10;
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

const Bubble = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 350px;
  height: 350px;
  background-color: var(--primary-orange);
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

const LeftZone = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const RightZone = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
