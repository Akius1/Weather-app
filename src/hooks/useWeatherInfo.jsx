import { useQuery } from "react-query";
import { getWeatherInfo } from "../utils/api";

export const useWeatherInfo = (coord, unit) => {
  return useQuery(
    ["weatherInfo", coord, unit],
    () => coord && getWeatherInfo(coord, unit),
    {
      enabled: !!coord && !!unit,
    }
  );
};
