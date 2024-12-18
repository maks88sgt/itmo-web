import styles from "./card.module.scss";
import { AsteroidCard, AsteroidCardProps } from "./AsteroidCard";
import { useDispatch } from "../../store/useDispatch";
import { useSelector } from "../../store/useSelector";

export const AsteroidCardButton = (props: AsteroidCardProps) => {
  const { isDangerous } = props;

  const asteroidsToDestroyment = useSelector((store)=>store.asteroidsToDestroyment);

  const dispatch = useDispatch();

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
          dispatch({ type: "SET_ASTEROIDS_TO_DESTROYMENT", payload: props });
        }}
      >
        <div className={styles.actionText}>
          {isInDestroyment ? "Remove from destroyment" : "To destroyment"}
        </div>
      </button>
    </div>
  );
};
