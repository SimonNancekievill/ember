import SplashScreen from "@/components/SplashScreen";
import HomePage from "@/components/HomePage";
import { useState } from "react";
import useSWR from "swr";
import useAffirmation from "@/hooks/useAffirmation";
import useOnboarding from "@/hooks/useOnboarding";
import Onboarding from "@/components/Onboarding";

export default function Page() {
  const { data: entries, isLoading, error, mutate } = useSWR("/api/entries");
  const { affirmation } = useAffirmation();
  const { hasOnboarded, completedOnboarding, isReady } = useOnboarding();
  const [splashCompleted, setSplashCompleted] = useState(false);

  if (!isReady) return null;

  if (isLoading && hasOnboarded && !splashCompleted) {
    return (
      <SplashScreen
        onComplete={() => setSplashCompleted(true)}
        affirmation={affirmation}
      />
    );
  }
  if (!hasOnboarded) {
    return <Onboarding onComplete={completedOnboarding} />;
  }
  return (
    <HomePage
      affirmation={affirmation}
      entries={entries}
      error={error}
      mutate={mutate}
    />
  );
}
