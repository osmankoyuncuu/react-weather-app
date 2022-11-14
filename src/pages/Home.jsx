import Form from "../component/Form";
import Detail from "./Detail";

const Home = ({ getWeather }) => {
  return (
    <>
      <Form getWeather={getWeather} />
      <Detail />
    </>
  );
};

export default Home;
