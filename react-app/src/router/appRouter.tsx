import { createBrowserRouter, Navigate } from "react-router-dom";
import { Asteroid } from "../components/Asteroid";
import { Asteroids } from "../components/Asteroids";
import { Destroyment } from "../components/Destroyment";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/asteroids"/>,
  },
  {
    path: "/asteroids",
    element: <Asteroids />,
  },
  {
    path: "/destroyment",
    element: <Destroyment />,
  },
  {
    path: "/asteroids/:asteroid",
    element: <Asteroid />,
  },
  {
    path: "*",
    element: <Navigate to="/asteroids"/>,
  },
]);
