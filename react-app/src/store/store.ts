import { AsteroidCardProps } from "../components/asteroid-card/AsteroidCard";
import { createStore } from "./createStore";

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

export type State = typeof initialAppState;

export type Action =
  | { type: "SET_ASTEROIDS"; payload: AsteroidCardProps[] }
  | { type: "SET_ASTEROIDS_TO_DESTROYMENT"; payload: AsteroidCardProps }
  | { type: "SET_IS_KILOMETERS"; payload: boolean }
  | { type: "SET_IS_ONLY_DANGEROUS"; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ASTEROIDS":
      return { ...state, asteroids: action.payload  };
    case "SET_ASTEROIDS_TO_DESTROYMENT":
      const exists = state.asteroidsToDestroyment.find(
        (it) => it.name === action.payload.name
      );
      return {
        ...state,
        asteroidsToDestroyment: exists
          ? state.asteroidsToDestroyment.filter(
              (it) => it.name !== action.payload.name
            )
          : [...state.asteroidsToDestroyment, action.payload],
      };
    case "SET_IS_KILOMETERS":
      return { ...state, isKilometers: action.payload };
    case "SET_IS_ONLY_DANGEROUS":
      return { ...state, isOnlyDangerous: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer, initialAppState);