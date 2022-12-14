import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CityList from "../pages/CityList";
import Map from "../pages/Map";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turkeymap" element={<Map />} />
        <Route path="/citylist" element={<CityList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
