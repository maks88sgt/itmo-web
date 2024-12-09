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

const initialAppState: {
  asteroidsToDestroyment: AsteroidCardProps[];
  isKilometers: boolean;
  isOnlyDangerous: boolean;
} = { asteroidsToDestroyment: [], isKilometers: true, isOnlyDangerous: false };

export const AsteroidContext = createContext<{
  appState: {
    asteroidsToDestroyment: AsteroidCardProps[];
    isKilometers: boolean;
    isOnlyDangerous: boolean;
  };
  dispatch: Dispatch<{ type: string; payload?: any }>;
}>({ appState: { ...initialAppState }, dispatch: (arg: any) => null });

const appReducer = (
  state: typeof initialAppState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
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
  const [isAsteroids, setIsAsteroids] = useState(true);
  const [appState, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AsteroidContext.Provider
      value={{
        appState,
        dispatch,
      }}
    >
      <div className={styles.app}>
        <AppHeader setIsAsteroids={setIsAsteroids} />
        {isAsteroids ? (
          <AsteroidsList />
        ) : (
          <div>
            {appState.asteroidsToDestroyment.map(
              (asteroid: AsteroidCardProps) => (
                <AsteroidCard key={asteroid.name} {...asteroid} />
              )
            )}
          </div>
        )}
      </div>
    </AsteroidContext.Provider>
  );
};

export default App;
