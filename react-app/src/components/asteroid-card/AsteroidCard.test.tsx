import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import dayjs from "dayjs";
import { AsteroidCardButton } from "./AsteroidCardButton";

const mockAsteroidCard = {
  isDangerous: true,
  name: "TestAsteroid",
  distanceKm: 12345,
  distanceMoon: 1.3,
  date: dayjs("23-12-2024").toString(),
  radius: 123,
  isKilometers: true,
};

export const ADD_TO_DESTROYMENT = "Add to destroyment";

const handleClick = jest.fn()

test("Asteroid Card", () => {
  render(
    <MemoryRouter>
      <AsteroidCardButton {...mockAsteroidCard} asteroidsToDestroyment={[]} dispatch={handleClick}/>
    </MemoryRouter>
  );
  const button = screen.getByTestId(ADD_TO_DESTROYMENT)
  expect(handleClick).not.toHaveBeenCalled()
  fireEvent.click(button)
  expect(handleClick).toHaveBeenCalledWith({ type: "SET_ASTEROIDS_TO_DESTROYMENT", payload: mockAsteroidCard })
});
