import { useState, useEffect } from "react";
export function useLocalStorageState(initialValue, key) {
  const [value, setValue] = useState(function () {
    const storageValue = localStorage.getItem(key)
    return storageValue ? JSON.parse(storageValue) : initialValue
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value]
  );
  return [value, setValue]
}
