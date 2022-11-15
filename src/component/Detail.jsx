import React from "react";
import DetailContainer, { Button, Card, Super } from "../Styles/Detail.styled";
import { AiFillCloud } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { BsWind } from "react-icons/bs";
import { useDetail } from "../context/DetailContext";
import { useGetWeather } from "../context/GetWeatherContext";

const Detail = () => {
  const { detail } = useDetail();
  const { setDetailApi, setList } = useGetWeather();
  const handleDelete = (name) => {
    const del = detail.filter((item) => item.name !== name);
    const delName = del.map((item) => item.name);
    setDetailApi(del);
    setList(delName);
  };

  return (
    <DetailContainer>
      {detail?.map((item) => {
        const { name, sys, weather, main, clouds, wind, iconUrl } = item;
        return (
          <Card key={name}>
            <Button onClick={() => handleDelete(name)}>X</Button>
            <h1 style={{ fontSize: "1.7rem" }}>
              <lord-icon
                src="https://cdn.lordicon.com/oaflahpk.json"
                trigger="hover"
                colors="primary:#fff"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
              {name} <Super>{sys?.country}</Super>
            </h1>
            <img src={iconUrl} alt="" />
            <h3>{weather[0]?.description}</h3>
            <h1>{Math.trunc(main?.temp)} ℃</h1>
            <h3>
              ↓ {Math.trunc(main?.temp_min)} ℃ / {Math.trunc(main?.temp_max)} ℃
              ↑
            </h3>
            <h3>
              <AiFillCloud /> Clouds: %{clouds?.all}
            </h3>
            <h3>
              <WiHumidity /> Humidity: %{main?.humidity}
            </h3>
            <h3>
              <BsWind /> Wind Speed: {wind?.speed} km/s
            </h3>
          </Card>
        );
      })}
    </DetailContainer>
  );
};

export default Detail;
