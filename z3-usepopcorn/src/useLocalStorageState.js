import { useEffect, useState } from "react";

// Custom hook to store state in localStorage
// It takes an initial state and a key as arguments and returns an array with the state and a function to update it
// It also stores the state in localStorage and retrieves it when the component mounts
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) || [] : initialState;
  });

  useEffect(
    function () {
      localStorage.getItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
