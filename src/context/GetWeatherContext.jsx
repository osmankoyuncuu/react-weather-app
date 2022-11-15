import axios from "axios";
import { useState } from "react";
import { createContext, useContext } from "react";

const GetWeatherContext = createContext();

export const GetWeatherProvider = ({ children }) => {
  const [detailApi, setDetailApi] = useState([]);
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const getWeather = async (city) => {
    try {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const { data } = await axios(url);
      const { name, sys, weather, main, clouds, wind } = data;
      const iconUrl = `http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`;
      if (list?.includes(name)) {
        setError(`
You already know the weather for ${city.toLocaleUpperCase()}, Please search for another city.`);
        setTimeout(() => {
          setError("");
        }, 2000);
      } else {
        setList([...list, name]);
        setDetailApi([
          { name, sys, weather, main, clouds, wind, iconUrl },
          ...detailApi,
        ]);
      }
    } catch (error) {
      setError(`404 (City Not Found)`);
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  };
  return (
    <GetWeatherContext.Provider
      value={{ getWeather, detailApi, setDetailApi, error, setList }}
    >
      {children}
    </GetWeatherContext.Provider>
  );
};

export const useGetWeather = () => useContext(GetWeatherContext);
