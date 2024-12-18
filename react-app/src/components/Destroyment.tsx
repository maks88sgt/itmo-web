import { AsteroidsList } from "./asteroids-list/AsteroidsList";
import { useDispatch } from "../store/useDispatch";
import { useSelector } from "../store/useSelector";

export const Destroyment = ()=>{
      const {
          isKilometers, isOnlyDangerous, asteroidsToDestroyment
        } = useSelector(store=>store);

      const dispatch = useDispatch()
    
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