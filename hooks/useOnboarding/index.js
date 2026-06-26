import { useState, useEffect } from "react";

const ONBOARDING_KEY = "emberOnboarded";

export default function useOnboarding() {
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {}, []);

  return;
}
