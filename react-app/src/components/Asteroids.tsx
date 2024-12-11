import { useContext, useEffect } from "react";
import { AsteroidContext } from "../App";
import { mockAsteroids } from "../utils/generate-asteroids";
import { AsteroidsList } from "./asteroids-list/AsteroidsList";
import ApiClient from "../api/ApiClient";

export const Asteroids = () => {
  const {
    appState: { isKilometers, isOnlyDangerous, asteroids },
    dispatch,
  } = useContext(AsteroidContext);

  useEffect(() => {
    ApiClient.getAsteroids().then((data)=>{
        dispatch({ type: "SET_ASTEROIDS", payload: data })
    })
  }, []);

  return (
    <div>
      <AsteroidsList
      asteroids={asteroids}
        isKilometers={isKilometers}
        isOnlyDangerous={isOnlyDangerous}
        dispatch={dispatch}
      />
    </div>
  );
};
