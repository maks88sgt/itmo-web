import {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  useReducer,
  DispatchWithoutAction,
} from "react";
import { AsteroidsList } from "./components/asteroids-list/AsteroidsList";
import {
  AsteroidCard,
  AsteroidCardProps,
} from "./components/asteroid-card/AsteroidCard";
import styles from "./App.module.css";
import { AppHeader } from "./components/app-header/AppHeader";
import {
  BrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { appRouter } from "./router/appRouter";
import { Asteroid } from "./components/Asteroid";
import { Asteroids } from "./components/Asteroids";
import { Destroyment } from "./components/Destroyment";

const initialAppState: {
  asteroids: AsteroidCardProps[];
  asteroidsToDestroyment: AsteroidCardProps[];
  isKilometers: boolean;
  isOnlyDangerous: boolean;
} = {
  asteroids: [],
  asteroidsToDestroyment: [],
  isKilometers: true,
  isOnlyDangerous: false,
};

export const AsteroidContext = createContext<{
  appState: {
    asteroidsToDestroyment: AsteroidCardProps[];
    isKilometers: boolean;
    isOnlyDangerous: boolean;
    asteroids:  AsteroidCardProps[];
  };
  dispatch: Dispatch<{ type: string; payload?: any }>;
}>({ appState: { ...initialAppState }, dispatch: (arg: any) => null });

const appReducer = (
  state: typeof initialAppState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case "SET_ASTEROIDS":
      return {
        ...state,
        asteroids: action.payload,
      };
    case "SET_ASTEROIDS_TO_DESTROYMENT":
      const isInDestroyment = !!state.asteroidsToDestroyment.find(
        (it) => it.name === action.payload.name
      );
      if (isInDestroyment) {
        return {
          ...state,
          asteroidsToDestroyment: state.asteroidsToDestroyment.filter(
            (it) => it.name !== action.payload.name
          ),
        };
      }
      return {
        ...state,
        asteroidsToDestroyment: [
          ...state.asteroidsToDestroyment,
          action.payload,
        ],
      };
    case "SET_IS_KILOMETERS":
      return { ...state, isKilometers: action.payload };
    case "SET_IS_ONLY_DANGEROUS":
      return { ...state, isOnlyDangerous: action.payload };
    default:
      return state;
  }
};

export const App = () => {
  const [appState, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AsteroidContext.Provider
      value={{
        appState,
        dispatch,
      }}
    >
      <div className={styles.app}>
        <BrowserRouter>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Navigate to="/asteroids" />} />
            <Route path="/asteroids" element={<Asteroids />} />
            <Route path="/destroyment" element={<Destroyment />} />
            <Route path="/asteroids/:id" element={<Asteroid />} />
            <Route path="*" element={<Navigate to="/asteroids" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AsteroidContext.Provider>
  );
};

export default App;
