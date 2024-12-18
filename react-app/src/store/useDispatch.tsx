import { useContext } from "react";
import { StoreContext } from "./StoreProvider";

export const useDispatch = ()=> {
    const { dispatch } = useContext(StoreContext);
    return dispatch
}