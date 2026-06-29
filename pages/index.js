import SplashScreen from "@/components/SplashScreen";
import HomePage from "@/components/HomePage";
import { useState } from "react";
import useSWR from "swr";
import useAffirmation from "@/hooks/useAffirmation";
import useOnboarding from "@/hooks/useOnboarding";
import Onboarding from "@/components/Onboarding";
import { useSession } from "next-auth/react";
import LogIn from "@/components/LogIn";

export default function Page() {
  const { data: entries, isLoading, error, mutate } = useSWR("/api/entries");
  const { affirmation } = useAffirmation();
  const { hasOnboarded, completeOnboarding, isReady } = useOnboarding();
  const [splashCompleted, setSplashCompleted] = useState(false);
  const { data: session, status } = useSession();

  if (!isReady) return null;

  if (!hasOnboarded) {
    return <Onboarding onComplete={completeOnboarding} />;
  }

  if (status === "loading") {
    return null;
  }
  if (status !== "authenticated") {
    return <LogIn />;
  }

  if (isLoading && !splashCompleted) {
    return (
      <SplashScreen
        onComplete={() => setSplashCompleted(true)}
        affirmation={affirmation}
      />
    );
  }
  return (
    <HomePage
      affirmation={affirmation}
      entries={entries}
      error={error}
      mutate={mutate}
      session={session}
    />
  );
}
