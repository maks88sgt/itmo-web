import { AsteroidCard, AsteroidCardProps } from "../asteroid-card/AsteroidCard";
import {
  generateAsteroids,
  getRandomInt,
} from "../../utils/generate-asteroids";
import { Dispatch, useEffect, useState } from "react";
import style from "./list.module.scss";

export const AsteroidsList = ({
  setDestroyment,
}: {
  setDestroyment: Dispatch<AsteroidCardProps[]>;
}) => {
  const [asteroids, setAsteroids] = useState<
    Omit<AsteroidCardProps, "isKilometers">[]
  >([]);
  const [isKilometers, setIsKilometers] = useState(true);
  const [isOnlyDangerous, setIsOnlyDangerous] = useState(false);

  useEffect(() => {
    setTimeout(() => setAsteroids(generateAsteroids(getRandomInt(1, 6))), 2000);
  }, []);

  return (
    <div>
      <span onClick={() => setIsOnlyDangerous(!isOnlyDangerous)}>
        <input type="checkbox" checked={isOnlyDangerous} /> Show only dangerous
      </span>
      <div>
        Distance in&nbsp;
        <span
          className={`${isKilometers ? style.selected : ""} ${style.option}`}
          onClick={() => {
            setIsKilometers(true);
          }}
        >
          kilometers
        </span>
        &nbsp;
        <span
          onClick={() => {
            setIsKilometers(false);
          }}
          className={`${!isKilometers ? style.selected : ""} ${style.option}`}
        >
          Moon distances
        </span>
      </div>
      {asteroids.length
        ? asteroids
            .filter((it) => {
              if (isOnlyDangerous) {
                return it.isDangerous;
              } else return true;
            })
            .map((it, index) => (
              <AsteroidCard key={index} {...it} isKilometers={isKilometers} setDestroyment={setDestroyment}/>
            ))
        : "Empty list"}
    </div>
  );
};
