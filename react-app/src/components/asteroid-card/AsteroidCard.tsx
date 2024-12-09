import { Dispatch, SetStateAction } from "react";
import { AsteroidCardButton } from "./AsteroidCardButton";
import { AsteroidCardData } from "./AsteroidCardData";
import { AsteroidCardImage } from "./AsteroidCardImage";
import style from "./card.module.scss";

export interface AsteroidCardProps {
  isDangerous: boolean;
  name: string;
  distanceKm: number;
  distanceMoon: number;
  date: string;
  radius: number;
  isKilometers: boolean;
}

export const AsteroidCard = (
  props: AsteroidCardProps & {
    setDestroyment: Dispatch<AsteroidCardProps[]>;
  }
) => {
  const { isDangerous, setDestroyment } = props;

  return (
    <div className={`${style.card} ${isDangerous ? style.dangerous : ""}`}>
      <AsteroidCardImage />
      <AsteroidCardData {...props} />
      <AsteroidCardButton
        onClick={() =>
          setDestroyment(
            //@ts-ignore
            (destroyment: AsteroidCardProps[]) => {
              if (destroyment.some((it) => it.name === props.name)) {
                return destroyment.filter((it) => it.name === props.name);
              } else {
                destroyment.push(props);
                return destroyment
              }
            }
          )
        }
      />
    </div>
  );
};
