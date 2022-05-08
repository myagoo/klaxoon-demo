import { useEffect, useState } from "react";

export const useRefreshInterval = (interval: number) => {
  const [, setTimestamp] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setTimestamp(Date.now()), interval);
    return () => clearInterval(intervalId);
  }, [interval]);
};
