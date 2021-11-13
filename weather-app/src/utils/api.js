import axios from "axios";


const routes = {
  weatherInfo:
    "http://api.openweathermap.org/data/2.5/forecast?appid=ad27d6b2697fceb255030535b25de60c",
};


const DEFAULT_ERROR_MESSAGE = "An error occurred, please try again";


const getErrorMsg = (error) => {
    if (error) {
      if (error.response?.data) {
        if (error.response.data.message) {
          return error.response.data.message;
        }
      }
    }
  
    return DEFAULT_ERROR_MESSAGE;
  };

export const getWeatherInfo = async (coord, unit)=> {
  
  try {
    const response = await axios.get(routes.weatherInfo, {
      params: {
        ...coord,
        units: unit
      },
    });

    if ([200].includes(response.status)) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    let message = getErrorMsg(error);
    throw new Error(message);
  }
};
