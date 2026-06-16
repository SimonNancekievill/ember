import AffirmationDisplay from "../AffirmationDisplay";
import styled from "styled-components";
import { useEffect, useState } from "react";

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
        <AffirmationDisplay affirmation={affirmation} />
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
