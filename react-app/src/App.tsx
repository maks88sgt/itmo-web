import styles from "./App.module.css";
import { AppHeader } from "./components/app-header/AppHeader";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Asteroid } from "./components/Asteroid";
import { Asteroids } from "./components/Asteroids";
import { Destroyment } from "./components/Destroyment";
import StoreProvider from "./store/StoreProvider";

export const App = () => {
  return (
    <StoreProvider>
      <div className={styles.app}>
        <BrowserRouter>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Navigate to="/asteroids" />} />
            <Route path="/asteroids" element={<Asteroids />} />
            <Route path="/destroyment" element={<Destroyment />} />
            <Route path="/asteroids/:id" element={<Asteroid />} />
            <Route path="*" element={<Navigate to="/asteroids" />} />
          </Routes>
        </BrowserRouter>
      </div>
      </StoreProvider>
  );
};

export default App;
