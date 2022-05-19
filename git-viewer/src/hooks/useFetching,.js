import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      setError(false);
      // TODO rework to normal error?
      await callback(...args);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
