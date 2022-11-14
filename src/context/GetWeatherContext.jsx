import axios from "axios";
import { useState } from "react";
import { createContext, useContext } from "react";

const GetWeatherContext = createContext();

export const GetWeatherProvider = ({ children }) => {
  const [detailApi, setDetailApi] = useState([]);
  const getWeather = async (city) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const { data } = await axios(url);
    const { name, sys, weather, main, clouds, wind } = data;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`;
    setDetailApi([
      { name, sys, weather, main, clouds, wind, iconUrl },
      ...detailApi,
    ]);
  };

  return (
    <GetWeatherContext.Provider value={{ getWeather, detailApi, setDetailApi }}>
      {children}
    </GetWeatherContext.Provider>
  );
};

export const useGetWeather = () => useContext(GetWeatherContext);
