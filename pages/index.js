import SplashScreen from "@/components/SplashScreen";
import HomePage from "@/components/HomePage";
import { useState } from "react";
import useAffirmation from "@/hooks/useAffirmation";

export default function Page() {
  const { affirmation } = useAffirmation();
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return (
      <SplashScreen
        onComplete={() => setShowSplash(false)}
        affirmation={affirmation}
      />
    );
  }
  return <HomePage affirmation={affirmation} />;
}
