import CityListContainer, { Select } from "../Styles/CityList.styled";
import useTurkeyCities from "use-turkey-cities";
import Detail from "./Detail";
import { useEffect, useState } from "react";
import { useDetail } from "../context/DetailContext";
import { useGetWeather } from "../context/GetWeatherContext";

const CityList = () => {
  const { cities } = useTurkeyCities();
  const [cityList, setCityList] = useState("");
  const { setDetail } = useDetail();
  const { getWeather, detailApi } = useGetWeather();

  useEffect(() => {
    getWeather(cityList);
  }, [cityList]);
  useEffect(() => {
    setDetail(detailApi);
  }, [detailApi]);

  return (
    <>
      <CityListContainer>
        <Select name="city" onChange={(e) => setCityList(e.target.value)}>
          <option value="">Selected a city</option>
          {cities.map((city) => (
            <option key={`city-${city}`} value={city}>
              {city}
            </option>
          ))}
        </Select>
      </CityListContainer>
      <Detail />
    </>
  );
};

export default CityList;
