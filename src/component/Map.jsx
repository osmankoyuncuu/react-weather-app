import React from "react";
import TurkeyMap from "turkey-map-react";

const Map = () => {
  return (
    <div className="App">
      <br />
      <br />
      <h1 style={{ color: "red" }}>Turkey</h1>
      {/*<TurkeyMap
        className="map"
        customStyle={{ idleColor: "#E5F1F8", hoverColor: "#69CDB3" }}
        //onClick={({ plateNumber, name }) => clickCity(plateNumber, name)}
      />*/}
      <TurkeyMap />
    </div>
  );
};
export default Map;
