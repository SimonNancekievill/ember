import { useState, useEffect } from "react";

const ONBOARDING_KEY = "emberOnboarded";

export default function useOnboarding() {
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setHasOnboarded(localStorage.getItem(ONBOARDING_KEY) === "true");
    setIsReady(true);
  }, []);

  function completedOnboarding() {
    localStorage.setItem(ONBOARDING_KEY, "true");
    setHasOnboarded(true);
  }

  return { hasOnboarded, completedOnboarding, isReady };
}
