import SplashScreen from "@/components/SplashScreen";
import HomePage from "@/components/HomePage";
import { useState, useEffect } from "react";
import useAffirmation from "@/hooks/useAffirmation";
import useOnboarding from "@/hooks/useOnboarding";
import Onboarding from "@/components/Onboarding";

export default function Page() {
  const { affirmation } = useAffirmation();
  const { hasOnboarded, completeOnboarding, isReady } = useOnboarding();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (isReady) {
      setShowSplash(hasOnboarded);
    }
  }, [isReady]);

  if (!isReady) return null;

  if (showSplash) {
    return (
      <SplashScreen
        onComplete={() => setShowSplash(false)}
        affirmation={affirmation}
      />
    );
  }
  if (!hasOnboarded) {
    return <Onboarding onComplete={completeOnboarding} />;
  }
  return <HomePage affirmation={affirmation} />;
}
