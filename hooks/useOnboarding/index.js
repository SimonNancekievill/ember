import { useState, useEffect } from "react";

const ONBOARDING_KEY = "emberOnboarded";

export default function useOnboarding() {
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setHasOnboarded(localStorage.getItem(ONBOARDING_KEY) === "true");
    setIsReady(true);
  }, []);

  function CompletedOnboarding() {
    localStorage.setItem(ONBOARDING_KEY, "ture");
    setHasOnboarded(true);
  }

  return { hasOnboarded, CompletedOnboarding, isReady };
}
