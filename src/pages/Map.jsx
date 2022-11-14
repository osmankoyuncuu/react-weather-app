import TurkeyMap from "turkey-map-react";
import MapContainer, { Header } from "../Styles/Map.styled";
import { useNavigate } from "react-router-dom";
import { useDetail } from "../context/DetailContext";
import Tooltip from "@mui/material/Tooltip";
import { useGetWeather } from "../context/GetWeatherContext";
import { useEffect } from "react";

const Map = () => {
  const navigate = useNavigate();
  const { setDetail } = useDetail();
  const { getWeather, detailApi } = useGetWeather();

  const renderCity = (cityComponent, cityData) => (
    <Tooltip title={cityData.name} key={cityData.id} placement="top">
      {cityComponent}
    </Tooltip>
  );
  useEffect(() => {
    setDetail(detailApi);
  }, [detailApi]);
  return (
    <MapContainer>
      <Header>Turkey</Header>
      <TurkeyMap
        customStyle={{
          idleColor: "#E5F1F8",
          hoverColor: "#33495f",
        }}
        cityWrapper={renderCity}
        onClick={({ plateNumber, name }) => {
          getWeather(name);
          navigate("/");
        }}
      />
    </MapContainer>
  );
};
export default Map;
