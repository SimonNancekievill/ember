import { useState, useEffect } from "react";
import affirmations from "@/public/affirmations.json";

export default function useAffiramtion() {
  const [affirmation, setAffirmation] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const cached = localStorage.getItem(`affirmation${today}`);

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
