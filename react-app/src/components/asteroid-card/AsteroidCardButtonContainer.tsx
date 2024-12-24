import {  AsteroidCardProps } from "./AsteroidCard";
import { useDispatch } from "../../store/useDispatch";
import { useSelector } from "../../store/useSelector";
import { AsteroidCardButton } from "./AsteroidCardButton";

export const AsteroidCardButtonContainer = (props: AsteroidCardProps) => {
  const asteroidsToDestroyment = useSelector((store)=>store.asteroidsToDestroyment);

  const dispatch = useDispatch();

  return (
    <AsteroidCardButton {...props} dispatch={dispatch} asteroidsToDestroyment={asteroidsToDestroyment}/>
  );
};
