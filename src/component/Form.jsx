import FormContainer, { Submit, Input, Span } from "../Styles/Form.styled";
import { useSearchText } from "../context/SearchTextContext";
import { useDetail } from "../context/DetailContext";
import { useGetWeather } from "../context/GetWeatherContext";
import { useEffect } from "react";

const Form = () => {
  const { searchText, setSearchText } = useSearchText();
  const { setDetail } = useDetail();
  const { getWeather, detailApi, error } = useGetWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(searchText);
    setSearchText("");
  };
  useEffect(() => {
    setDetail(detailApi);
  }, [detailApi]);
  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          required
          autoFocus
        />
        <Submit>Submit</Submit>
      </FormContainer>
      <Span>
        <h4>{error}</h4>
      </Span>
    </>
  );
};

export default Form;
