import { useEffect, useState } from "react";

export default function useDebouce(initialValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initialValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initialValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initialValue]);
  return debounceValue;
}
