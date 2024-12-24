import { AsteroidCardData } from "./AsteroidCardData";
import { AsteroidCardImage } from "./AsteroidCardImage";
import style from "./card.module.scss";
import { Link } from "react-router-dom";
import { AsteroidCardButtonContainer } from "./AsteroidCardButtonContainer";

export interface AsteroidCardProps {
  isDangerous: boolean;
  name: string;
  distanceKm: number;
  distanceMoon: number;
  date: string;
  radius: number;
  isKilometers: boolean;
}

export const AsteroidCard = (props: AsteroidCardProps) => {
  const { isDangerous } = props;

  return (
    <Link to={`/asteroids/${props.name}`}>
      <div className={`${style.card} ${isDangerous ? style.dangerous : ""}`}>
        <AsteroidCardImage {...props} />
        <AsteroidCardData {...props} />
        <AsteroidCardButtonContainer {...props} />
      </div>
    </Link>
  );
};
