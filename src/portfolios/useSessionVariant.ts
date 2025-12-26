import { useEffect, useState } from "react";

const sessionKey = "portfolio-variant-index";

export const useSessionVariant = (count: number) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (count <= 0) {
      return;
    }

    const stored = sessionStorage.getItem(sessionKey);
    if (stored) {
      const parsed = Number.parseInt(stored, 10);
      if (Number.isInteger(parsed) && parsed >= 0 && parsed < count) {
        setIndex(parsed);
        return;
      }
    }

    const randomIndex = Math.floor(Math.random() * count);
    sessionStorage.setItem(sessionKey, String(randomIndex));
    setIndex(randomIndex);
  }, [count]);

  return index;
};
