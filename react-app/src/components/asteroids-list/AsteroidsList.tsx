import { Dispatch } from "react";
import { AsteroidCard, AsteroidCardProps } from "../asteroid-card/AsteroidCard";
import style from "./list.module.scss";

export const AsteroidsList = (props: {
  isOnlyDangerous: boolean;
  dispatch: Dispatch<{ type: string; payload?: any }>;
  isKilometers: boolean;
  asteroids: AsteroidCardProps[];
}) => {
  const { isOnlyDangerous, dispatch, isKilometers, asteroids } = props;

  return (
    <div>
      <div className={style.listHeader}>
        <span
          onClick={() =>
            dispatch({
              type: "SET_IS_ONLY_DANGEROUS",
              payload: !isOnlyDangerous,
            })
          }
          className={style.listHeader}
        >
          <input type="checkbox" checked={isOnlyDangerous} /> Show only
          dangerous
        </span>
        <div>
          Distance in&nbsp;
          <span
            className={`${isKilometers ? style.selected : ""} ${style.option}`}
            onClick={() => {
              dispatch({ type: "SET_IS_KILOMETERS", payload: true });
            }}
          >
            kilometers
          </span>
          &nbsp;
          <span
            onClick={() => {
              dispatch({ type: "SET_IS_KILOMETERS", payload: false });
            }}
            className={`${!isKilometers ? style.selected : ""} ${style.option}`}
          >
            Moon distances
          </span>
        </div>
      </div>
      {asteroids.length
        ? asteroids
            .filter((it) => {
              if (isOnlyDangerous) {
                return it.isDangerous;
              } else return true;
            })
            .map((it, index) => (
              <AsteroidCard key={index} {...it} isKilometers={isKilometers} />
            ))
        : "Empty list"}
    </div>
  );
};
