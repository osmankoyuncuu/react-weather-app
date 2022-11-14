import FormContainer, { Submit, Input } from "../Styles/Form.styled";
import { useSearchText } from "../context/SearchTextContext";
import { useDetail } from "../context/DetailContext";
import { useGetWeather } from "../context/GetWeatherContext";
import { useEffect } from "react";

const Form = () => {
  const { searchText, setSearchText } = useSearchText();
  const { setDetail } = useDetail();
  const { getWeather, detailApi } = useGetWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(searchText);
    setSearchText("");
  };
  useEffect(() => {
    setDetail(detailApi);
    console.log(detailApi);
  }, [detailApi]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        required
      />
      <Submit>Submit</Submit>
    </FormContainer>
  );
};

export default Form;
