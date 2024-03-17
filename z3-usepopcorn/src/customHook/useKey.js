import { useEffect } from "react";

// Custom hook to handle keyboard events
// It takes a key and an action as arguments and adds an event listener to the document
// It removes the event listener when the component unmounts
export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
