import { useEffect, useRef, useState } from "react";
import { State, store } from "./store";

export function useSelector<T>(selector: (state: State) => T): T {
  const state = store.getState();

  const selectedState = selector(state);

  const [, forceRender] = useState(0);
  const lastSelectedState = useRef<T>(selectedState);

  useEffect(() => {
    const checkForUpdates = () => {
      const newSelectedState = selector(store.getState());
      if (!shallowEqual(lastSelectedState.current, newSelectedState)) {
        lastSelectedState.current = newSelectedState;
        forceRender((prev) => prev + 1);
      }
    };

    const unsubscribe = store.subscribe(checkForUpdates);
    return () => unsubscribe();
  }, [selector]);

  return lastSelectedState.current;
}

function shallowEqual(obj1: any, obj2: any) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}