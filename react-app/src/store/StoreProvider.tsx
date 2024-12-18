import React, { createContext, useContext, useEffect, useState } from "react";
import { store, State } from "./store";

export const StoreContext = createContext<{
  state: State;
  dispatch: typeof store.dispatch;
}>({
  state: store.getState(),
  dispatch: store.dispatch,
});

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return unsubscribe;
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch: store.dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

export default StoreProvider