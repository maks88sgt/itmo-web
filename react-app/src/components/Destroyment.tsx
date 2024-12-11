import { useContext } from "react";
import { AsteroidContext } from "../App";
import { AsteroidsList } from "./asteroids-list/AsteroidsList";

export const Destroyment = ()=>{
    const {
        appState: { isKilometers, isOnlyDangerous, asteroidsToDestroyment },
        dispatch,
      } = useContext(AsteroidContext);
    
      return (
        <div>
          <AsteroidsList
            asteroids={asteroidsToDestroyment}
            isKilometers={isKilometers}
            isOnlyDangerous={isOnlyDangerous}
            dispatch={dispatch}
          />
        </div>
      );
}