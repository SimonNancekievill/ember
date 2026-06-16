import AffirmationDisplay from "../AffirmationDisplay";
import styled from "styled-components";
import { useState } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const timer = setTimeout(() => {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  }, 3000);

  function cleanUp() {
    setTimeout(timer);
  }
  return;
}

const StyledPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const StyledSubtitle = styled.h2`
  color: var(--tertiary-grey);
  font-weight: 400;
`;
