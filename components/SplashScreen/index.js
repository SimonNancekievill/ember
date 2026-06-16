import AffirmationDisplay from "../AffirmationDisplay";
import styled from "styled-components";
import useAffiramtion from "@/hooks/useAffirmation";
import { useEffect, useState } from "react";

export default function SplashScreen({ onComplete }) {
  const { affirmation, isLoading } = useAffiramtion();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3000);

    function cleanUp() {
      setTimeout(timer);
    }
    return cleanUp();
  }, [isLoading, onComplete]);

  function handleSkip() {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  }
  if (!isVisible) return null;

  return (
    <StyledOverlay onClick={handleSkip}>
      <StyledSplash>
        <AffirmationDisplay>{affirmation}</AffirmationDisplay>
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
