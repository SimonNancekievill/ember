import SplashScreen from "@/components/SplashScreen";
import HomePage from "@/components/HomePage";
import { useState } from "react";
import useAffiramtion from "@/hooks/useAffirmation";
import LogIn from "@/components/LogIn";

export default function Page() {
  const { affirmation } = useAffiramtion();
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
