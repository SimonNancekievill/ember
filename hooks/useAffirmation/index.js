import { useState, useEffect } from "react";
import affirmations from "@/public/affirmations.json";

export default function useAffiramtion() {
  const [affirmation, setAffirmation] = useState("");

  useEffect(() => {
    console.log("useAffirmation effect running");
    const today = new Date().toISOString().split("T")[0];
    console.log("today key:", today);
    const cached = localStorage.getItem(`affirmation${today}`);
    console.log("cached:", cached);
    console.log("localStorage keys:", Object.keys(localStorage));

    if (cached) {
      setAffirmation(cached);
    } else {
      const randomIndex = Math.floor(
        Math.random() * affirmations.affirmations.length
      );
      const newAffirmation = affirmations.affirmations[randomIndex];

      setAffirmation(newAffirmation);
      localStorage.setItem(`affirmation${today}`, newAffirmation);
    }
  }, []);

  return { affirmation };
}
