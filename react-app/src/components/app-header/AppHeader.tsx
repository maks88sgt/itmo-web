import { NavLink } from "react-router-dom";

export const AppHeader = () => {
  return (
    <div style={{height: "50px"}}>
      <NavLink to="/asteroids">Asteroids</NavLink> <NavLink to="/destroyment" >Destroyment</NavLink>
    </div>
  );
};
