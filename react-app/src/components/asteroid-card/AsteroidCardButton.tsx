import styles from "./card.module.scss";
import { AsteroidCardProps } from "./AsteroidCard";
import { ADD_TO_DESTROYMENT } from "./AsteroidCard.test";
import { store } from "../../store/store";

export const AsteroidCardButton = (
  props: AsteroidCardProps & {
    asteroidsToDestroyment: AsteroidCardProps[];
    dispatch: typeof store.dispatch;
  }
) => {
  const { isDangerous, asteroidsToDestroyment, dispatch } = props;

  const isInDestroyment = !!asteroidsToDestroyment.find(
    (it: AsteroidCardProps) => it.name === props.name
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
          ev.preventDefault();
          dispatch({ type: "SET_ASTEROIDS_TO_DESTROYMENT", payload: {...props } });
        }}
        data-testId={ADD_TO_DESTROYMENT}
      >
        <div className={styles.actionText}>
          {isInDestroyment ? "Remove from destroyment" : "To destroyment"}
        </div>
      </button>
    </div>
  );
};
