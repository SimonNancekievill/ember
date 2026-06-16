import SplashScreen from "@/components/SplashScreen";
import HomePage from "@/components/HomePage";
import { useState } from "react";

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }
  return <HomePage />;
}
