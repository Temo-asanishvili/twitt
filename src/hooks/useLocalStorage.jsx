import { useEffect, useState } from "react";

export default function useLocalStorage(defaultVal, key, ttl) {
  const [value, setValue] = useState(() => {
    const tempValue = window.localStorage.getItem(key);
    return tempValue !== null ? JSON.parse(tempValue) : defaultVal;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value), ttl);
  }, [value, key, ttl]);

  return [value, setValue];
}
