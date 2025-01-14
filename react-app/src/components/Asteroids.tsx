import { useEffect, useRef, useState } from "react";
import { AsteroidsList } from "./asteroids-list/AsteroidsList";
import ApiClient from "../api/ApiClient";
import dayjs from "dayjs";
import { useDispatch } from "../store/useDispatch";
import { useSelector } from "../store/useSelector";

export const Asteroids = () => {
  const {
    isKilometers, isOnlyDangerous, asteroids
  } = useSelector(store=>store);

  const dispatch = useDispatch()

  const [date, setDate] = useState(dayjs(Date.now()).format("YYYY-MM-DD"));

  useEffect(() => {
    ApiClient.getAsteroids(date).then((data) => {
      dispatch({ type: "SET_ASTEROIDS", payload: [...asteroids, ...data] });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const infiniteScrollRef = useRef(null);

  const goToTopTracker = useRef(null);
  const [goToTopVisible, setGoToTopVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01,
    };

    const intersectionHandler = (divs: any) => {
      console.log("Not visible", !divs[0].isIntersecting)
      setGoToTopVisible(!divs[0].isIntersecting);
    };

    const observer = new IntersectionObserver(intersectionHandler, options);

    if (goToTopTracker.current) {
      observer.observe(goToTopTracker.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01,
    };

    const intersectionHandler = (divs: any) => {
      if (divs[0].isIntersecting) {
        setDate(dayjs(date).add(1, "day").format("YYYY-MM-DD"));
      }
    };

    const observer = new IntersectionObserver(intersectionHandler, options);

    if (infiniteScrollRef.current) {
      observer.observe(infiniteScrollRef.current);
    }

    return () => observer.disconnect();
  }, [asteroids, date]);

  return (
    <div style={{position: "relative"}}>
      <div style={{ height: "1px" }} ref={goToTopTracker}></div>
      <AsteroidsList
        asteroids={asteroids}
        isKilometers={isKilometers}
        isOnlyDangerous={isOnlyDangerous}
        dispatch={dispatch}
      />
      <div style={{ height: "10px" }} ref={infiniteScrollRef}></div>
      {goToTopVisible && (
        <button
          onClick={() =>
            goToTopTracker.current && window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          style={{position: "fixed", bottom: "30px", right: "30px"}}
        >
          Go to top
        </button>
      )}
    </div>
  );
};
