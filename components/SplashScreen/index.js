import AffirmationDisplay from "../AffirmationDisplay";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen({ onComplete, affirmation }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3000);

    function cleanUp() {
      clearTimeout(timer);
    }
    return cleanUp;
  }, [onComplete]);

  function handleSkip() {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  }
  if (!isVisible) return null;

  return (
    <StyledOverlay onClick={handleSkip}>
      <StyledSplash>
        <HeaderWrapper>
          <Image
            src="/images/Ember-E.svg"
            width={45}
            height={45}
            alt="Ember E as logo"
          />
          <AffirmationDisplay affirmation={affirmation} />
        </HeaderWrapper>
        <BubbleBottom />
        <BubbleTop />
      </StyledSplash>
    </StyledOverlay>
  );
}

const StyledOverlay = styled.div`
  position: fixed;
  background-color: var(--primary-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 100;
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledSplash = styled.div`
  position: relative;
  padding: 24px;
  text-align: center;
  animation: fadeOut 0.5s ease-out 2.5s forwards;

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 24px 0px;
`;

const BubbleBottom = styled.div`
  position: absolute;
  bottom: -450px;
  left: -50px;
  width: 350px;
  height: 350px;
  border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
  background-color: var(--tertiary-orange);
`;
const BubbleTop = styled.div`
  position: absolute;
  top: -450px;
  right: -50px;
  width: 350px;
  height: 350px;
  border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
  background-color: var(--tertiary-orange);
`;
