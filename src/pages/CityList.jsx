import CityListContainer, { Select } from "../Styles/CityList.styled";
import useTurkeyCities from "use-turkey-cities";
import Detail from "../component/Detail";
import { useEffect, useState } from "react";
import { useDetail } from "../context/DetailContext";
import { useGetWeather } from "../context/GetWeatherContext";
import { Span } from "../Styles/Form.styled";

const CityList = () => {
  const { cities } = useTurkeyCities();
  const [cityList, setCityList] = useState("selected");
  const { setDetail } = useDetail();
  const { getWeather, detailApi, error } = useGetWeather();

  useEffect(() => {
    if (!(cityList === "selected")) {
      getWeather(cityList);
    }
  }, [cityList]);
  useEffect(() => {
    setDetail(detailApi);
  }, [detailApi]);
  return (
    <>
      <CityListContainer>
        <Select name="city" onChange={(e) => setCityList(e.target.value)}>
          <option value="selected">Selected a city</option>
          {cities.map((city) => (
            <option key={`city-${city}`} value={city}>
              {city}
            </option>
          ))}
        </Select>
      </CityListContainer>
      <Span>
        <h4>{error}</h4>
      </Span>
      <Detail />
    </>
  );
};

export default CityList;
