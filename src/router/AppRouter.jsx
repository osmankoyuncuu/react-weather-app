import { Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import CityList from "../component/CityList";
import Map from "../component/Map";
import Detail from "../component/Detail";
import Navbar from "../component/Navbar";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turkeymap" element={<Map />} />
        <Route path="/citylist" element={<CityList />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
};

export default AppRouter;
