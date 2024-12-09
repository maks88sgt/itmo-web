import { useState } from "react";
import { AsteroidsList } from "./components/asteroids-list/AsteroidsList";
import { AsteroidCardProps } from "./components/asteroid-card/AsteroidCard";

export const App = () => {
  const [isAsteroids, setIsAsteroids] = useState(true);
  const [destroyment, setDestroyment] = useState<AsteroidCardProps[]>([])

  return (
    <div>
      {" "}
      <span onClick={()=>setIsAsteroids(true)}>Asteroids</span>
      <span onClick={()=>setIsAsteroids(false)}>Destroyment</span>
      {isAsteroids ? <AsteroidsList setDestroyment={setDestroyment}/> : <div>{JSON.stringify(destroyment)} </div>}
    </div>
  );
};

export default App;
