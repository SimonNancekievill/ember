import SplashScreen from "@/components/SplashScreen";
import HomePage from "@/components/HomePage";
import { useState } from "react";
import useAffiramtion from "@/hooks/useAffirmation";

export default function Page() {
  const { affirmation, isLoading } = useAffiramtion();
  const [showSplash, setShowSplash] = useState(true);

  if (isLoading || showSplash) {
    return (
      <SplashScreen
        onComplete={() => setShowSplash(false)}
        affirmation={affirmation}
      />
    );
  }
  return <HomePage affirmation={affirmation} />;
}
