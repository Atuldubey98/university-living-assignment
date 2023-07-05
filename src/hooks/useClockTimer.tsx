import { useEffect } from "react";

export default function useClockTimer(
  dependents: React.DependencyList,
  update: () => void
) {
  let interval: number | undefined = undefined;
  useEffect(() => {
    interval = setInterval(update, 1000);
    return () => {
      clearInterval(interval);
    };
  }, dependents);
}
