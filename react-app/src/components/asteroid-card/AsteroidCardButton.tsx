import { useContext } from "react";
import { AsteroidContext } from "../../App";
import styles from "./card.module.scss";
import { AsteroidCardProps } from "./AsteroidCard";

export const AsteroidCardButton = (props: AsteroidCardProps) => {
  const { isDangerous } = props;

  const { appState: {asteroidsToDestroyment}, dispatch } =
    useContext(AsteroidContext);

  const isInDestroyment = !!asteroidsToDestroyment.find(
    (it) => it.name === props.name
  );

  return (
    <div>
      <div className={styles.actionGrade}>
        {isDangerous ? "Dangerous" : "Not dangerous"}
      </div>
      <button
        className={styles.action}
        onClick={(ev) => {
          ev.stopPropagation();
          ev.preventDefault()
          dispatch({type: "SET_ASTEROIDS_TO_DESTROYMENT", payload: props})
        }}
      >
        <div className={styles.actionText}>{isInDestroyment ? "Remove from destroyment" : "To destroyment"}</div>
      </button>
    </div>
  );
};
