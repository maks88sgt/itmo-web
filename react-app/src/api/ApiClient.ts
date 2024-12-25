import axios, { AxiosInstance } from "axios";
import { AsteroidCardProps } from "../components/asteroid-card/AsteroidCard";
import dayjs from "dayjs";

//const apiKey = process.env.REACT_APP_API_KEY

class ApiClient {
  private axios: AxiosInstance;

  constructor(baseURL: string) {
    this.axios = axios.create({ baseURL });
  }

  async getAsteroids(date?: string) {
    let startDate = date;
    if(!startDate) {
      startDate = dayjs(Date.now()).format("YYYY-MM-DD") as string
    }
    return (await this.axios.get(`/feed?api_key=Ckd5fr6UC15jwzFqCCrgHCia5pqSb5NDE2fM9WQl&start_date=${startDate}&&end_date=${startDate}`)).data.near_earth_objects[startDate].map(this.adaptAsteroid);
  }

  private adaptAsteroid = (asteroid: any): Partial<AsteroidCardProps> => {
    return {
      date: asteroid.close_approach_data[0].close_approach_date,
      distanceKm: asteroid.close_approach_data[0].miss_distance.kilometers,
      distanceMoon: asteroid.close_approach_data[0].miss_distance.lunar,
      isDangerous: asteroid.is_potentially_hazardous_asteroid,
      name: asteroid.name,
      radius: Math.round(
        (asteroid.estimated_diameter.meters.estimated_diameter_max -
          asteroid.estimated_diameter.meters.estimated_diameter_min) /
          2
      ),
    };
  };
}

const apiClient = new ApiClient("https://api.nasa.gov/neo/rest/v1/");

export default apiClient as ApiClient;
